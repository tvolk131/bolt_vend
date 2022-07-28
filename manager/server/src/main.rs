mod proto;
mod service;

use actix_web::{http::StatusCode, web, App, HttpRequest, HttpResponse, HttpServer, Result};
use futures::join;
use proto::bolt_vend_api::v1::machine_service_server::MachineServiceServer;
use proto::bolt_vend_api::v1::manager_service_server::ManagerServiceServer;
use service::machine_service_impl::MachineServiceImpl;
use service::manager_service_impl::ManagerServiceImpl;
use tonic::transport::Server;

const FAVICON_BYTES: &[u8] = include_bytes!("../../client/src/dist/favicon.ico");
const HTML_BYTES: &[u8] = include_bytes!("../../client/src/dist/index.html");
const JS_BUNDLE_BYTES: &[u8] = include_bytes!("../../client/src/dist/bundle.js");

async fn not_found(request: HttpRequest) -> Result<HttpResponse> {
    if request.uri().to_string().ends_with("/favicon.ico") {
        Ok(HttpResponse::build(StatusCode::OK)
            .content_type("image/x-icon; charset=utf-8")
            .body(FAVICON_BYTES))
    } else if request.uri().to_string().ends_with("/bundle.js") {
        Ok(HttpResponse::build(StatusCode::OK)
            .content_type("text/javascript; charset=utf-8")
            .body(JS_BUNDLE_BYTES))
    } else {
        Ok(HttpResponse::build(StatusCode::OK)
            .content_type("text/html; charset=utf-8")
            .body(HTML_BYTES))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let grpc_port: u16 = 50052;
    let grpc_address: std::net::SocketAddr = format!("0.0.0.0:{}", grpc_port).parse().unwrap();

    let frontend_port: u16 = 8080;
    let frontend_address: std::net::SocketAddr =
        format!("0.0.0.0:{}", frontend_port).parse().unwrap();

    println!("Starting server on port {}", grpc_port);
    let grpc_server_future = Server::builder()
        .add_service(tonic_web::enable(MachineServiceServer::new(
            MachineServiceImpl::new(),
        )))
        .add_service(tonic_web::enable(ManagerServiceServer::new(
            ManagerServiceImpl::new(),
        )))
        .serve(grpc_address);

    println!("Starting frontend server on port {}", 8080);
    let frontend_server_future =
        HttpServer::new(|| App::new().default_service(web::route().to(not_found)))
            .bind(frontend_address)?
            .run();

    let (grpc_server_status, frontend_server_status) =
        join!(grpc_server_future, frontend_server_future);

    if let Err(grpc_server_error) = grpc_server_status {
        return Err(Box::from(grpc_server_error));
    }

    if let Err(frontend_server_error) = frontend_server_status {
        return Err(Box::from(frontend_server_error));
    }

    Ok(())
}
