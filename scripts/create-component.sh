#!/bin/bash

# Funzione per creare i file necessari
create_component_files() {
    local component_name=$1
    local base_path="/Users/claudioperroni/Documents/ift/integys/integys-web/integys-web"
    
    # Definire i percorsi
    local paths=(
        "sanity/schemas/blocks/${component_name}/${component_name}.ts"
        "sanity/queries/${component_name}/${component_name}.ts"
        "components/ui/${component_name}/${component_name}.tsx"
    )
    
    # Creare i file
    for path in "${paths[@]}"; do
        local full_path="${base_path}/${path}"
        mkdir -p "$(dirname "${full_path}")"
        touch "${full_path}"
        echo "// ${component_name} component file" > "${full_path}"
    done
}

# Main
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <component_name>"
    exit 1
fi

component_name=$1
create_component_files "${component_name}"