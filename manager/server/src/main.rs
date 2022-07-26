mod proto;
mod service;

use proto::bolt_vend_api::v1::machine_service_server::MachineServiceServer;
use proto::bolt_vend_api::v1::manager_service_server::ManagerServiceServer;
use service::machine_service_impl::MachineServiceImpl;
use service::manager_service_impl::ManagerServiceImpl;
use tonic::transport::Server;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let port: u16 = 50052;
    let address = format!("0.0.0.0:{}", port).parse().unwrap();

    println!("Starting server on port {}", port);
    Server::builder()
        .add_service(MachineServiceServer::new(MachineServiceImpl::new()))
        .add_service(ManagerServiceServer::new(ManagerServiceImpl::new()))
        .serve(address)
        .await?;
    Ok(())
}
