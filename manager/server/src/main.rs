mod proto;
mod service;

use actix_web::{web, App, HttpServer};
use futures::join;
use proto::bolt_vend_api::v1::machine_service_server::MachineServiceServer;
use proto::bolt_vend_api::v1::manager_service_server::ManagerServiceServer;
use service::machine_service_impl::MachineServiceImpl;
use service::manager_service_impl::ManagerServiceImpl;
use tonic::transport::Server;

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
        HttpServer::new(|| App::new().route("/hello", web::get().to(|| async { "Hello World!" })))
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
