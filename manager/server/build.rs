use std::fs;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let _ = fs::create_dir("./src/proto");
    tonic_build::configure()
        .out_dir("./src/proto")
        .build_server(true)
        .compile_well_known_types(true)
        .compile(
            &[
                "bolt_vend_api/v1/machine_service.proto",
                "bolt_vend_api/v1/manager_service.proto",
                "bolt_vend_api/v1/model.proto",
            ],
            &["../../proto"],
        )?;
    Ok(())
}
