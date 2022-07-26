use super::super::proto::bolt_vend_api::v1::manager_service_server::ManagerService;
use super::super::proto::bolt_vend_api::v1::{
    CreateItemRequest, DeleteItemRequest, DeleteMachineRequest, GetItemRequest, GetMachineRequest,
    Item, ListItemsRequest, ListItemsResponse, ListMachinesRequest, ListMachinesResponse, Machine,
    UpdateItemRequest, UpdateMachineRequest,
};
use super::super::proto::google::protobuf::Empty;
use tonic::{Request, Response, Status};

pub struct ManagerServiceImpl {}

impl ManagerServiceImpl {
    pub fn new() -> Self {
        Self {}
    }
}

#[tonic::async_trait]
impl ManagerService for ManagerServiceImpl {
    async fn get_item(&self, request: Request<GetItemRequest>) -> Result<Response<Item>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn list_items(
        &self,
        request: Request<ListItemsRequest>,
    ) -> Result<Response<ListItemsResponse>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn create_item(
        &self,
        request: Request<CreateItemRequest>,
    ) -> Result<Response<Item>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn update_item(
        &self,
        request: Request<UpdateItemRequest>,
    ) -> Result<Response<Item>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn delete_item(
        &self,
        request: Request<DeleteItemRequest>,
    ) -> Result<Response<Empty>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn get_machine(
        &self,
        request: Request<GetMachineRequest>,
    ) -> Result<Response<Machine>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn list_machines(
        &self,
        request: Request<ListMachinesRequest>,
    ) -> Result<Response<ListMachinesResponse>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn update_machine(
        &self,
        request: Request<UpdateMachineRequest>,
    ) -> Result<Response<Machine>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }

    async fn delete_machine(
        &self,
        request: Request<DeleteMachineRequest>,
    ) -> Result<Response<Empty>, Status> {
        Err(Status::unimplemented("RPC is unimplemented."))
    }
}
