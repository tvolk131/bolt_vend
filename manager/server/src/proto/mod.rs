#[path = "./"]
pub mod bolt_vend_api {
    #[path = "./bolt_vend_api.v1.rs"]
    pub mod v1;
}

#[path = "./"]
pub mod google {
    #[path = "./google.protobuf.rs"]
    pub mod protobuf;
}
