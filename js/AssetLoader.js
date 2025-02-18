export default function loadAssets(BABYLON, scene) {
    let hostPath;

    if(location.hostname === "localhost"){
        hostPath = '.';
    }
    else {
        hostPath = '/GGJ2025/';
    }

    const purple_mat = new BABYLON.StandardMaterial("purple_mat", scene);
    purple_mat.diffuseColor = new BABYLON.Color3(1, 0, 1);

    const blue_mat = new BABYLON.StandardMaterial("blue_mat", scene);
    blue_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);

    const red_mat = new BABYLON.StandardMaterial("red_mat", scene);
    red_mat.diffuseColor = new BABYLON.Color3(1, 0, 0);

    const brown_mat = new BABYLON.StandardMaterial("brown_mat", scene);
    brown_mat.diffuseColor = new BABYLON.Color3(0.306, 0.157, 0.016);

    const soil_texture = new BABYLON.StandardMaterial("soil", scene);
    soil_texture.diffuseTexture = new BABYLON.Texture(hostPath + "/textures/soil.png", scene);

    const textureObj = { purple_mat, blue_mat, red_mat, brown_mat, soil_texture };
    return textureObj;
}