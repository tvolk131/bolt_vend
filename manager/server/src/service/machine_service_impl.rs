use super::super::proto::bolt_vend_api::v1::machine_service_server::MachineService;
use super::super::proto::bolt_vend_api::v1::{
    GetInvoiceRequest, GetInvoiceResponse, GetMachineUpdatesRequest, GetMachineUpdatesResponse,
    InitMachineRequest, InitMachineResponse,
};
use tonic::{Request, Response, Status};

pub struct MachineServiceImpl {}

impl MachineServiceImpl {
    pub fn new() -> Self {
        Self {}
    }
}

#[tonic::async_trait]
impl MachineService for MachineServiceImpl {
    async fn init_machine(
        &self,
        request: Request<InitMachineRequest>,
    ) -> Result<Response<InitMachineResponse>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn get_invoice(
        &self,
        request: Request<GetInvoiceRequest>,
    ) -> Result<Response<GetInvoiceResponse>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn get_machine_updates(
        &self,
        request: Request<GetMachineUpdatesRequest>,
    ) -> Result<Response<GetMachineUpdatesResponse>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }
}
