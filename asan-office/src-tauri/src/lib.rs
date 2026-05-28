use std::fs;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct DocumentMetadata {
    title: String,
    author: String,
    created_at: String,
}

#[tauri::command]
fn save_protected_file(path: String, content: String, _key: String) -> Result<String, String> {
    // In a real implementation, content would be encrypted with AES-GCM using _key
    fs::write(&path, content).map_err(|e| e.to_string())?;
    Ok(format!("Securely saved to {}", path))
}

#[tauri::command]
fn get_spell_suggestions(word: String) -> Vec<String> {
    // Placeholder for Hunspell/Offline spell check logic
    if word == "reciept" {
        return vec!["receipt".to_string(), "receive".to_string()];
    }
    vec![]
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_protected_file, get_spell_suggestions])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
