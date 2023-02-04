import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as lil from 'lil-gui'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
/**
 * GUI instance 
 */

const gui = new lil.GUI()

/**
 * canvas links to the index.html
 */
const canvas = document.querySelector('canvas.webgl')

/**
 * scene
 */
const scene = new THREE.Scene()


//fog
const fogParam = {}
fogParam.intensity =0
fogParam.distance = 150

const fogt = () =>{
    const fog = new THREE.Fog('#262837',fogParam.intensity,fogParam.distance)
    scene.fog = fog
}
fogt()

/**
 * texture loader
 */
const textureLoader = new THREE.TextureLoader()

    //rocks
    const rockTexture = textureLoader.load('./textures/rocks/Rock_039_baseColor.jpg')
    const rockAOTexture = textureLoader.load('./textures/rocks/Rock_039_ambientOcclusion.jpg')
    const rockHeightTexture = textureLoader.load('./textures/rocks/Rock_039_height.png')
    const rockNormalTexture = textureLoader.load('./textures/rocks/Rock_039_normal.jpg')
    
    //rock end
    const skyt = textureLoader.load('./textures/sky/nightsky.jpg')
    scene.background =skyt

    /**
     * grass
     */
    const grassTexture = textureLoader.load('./textures/ground/Stylized_Grass_002_basecolor.jpg')
    const grassAOTexture = textureLoader.load('./textures/ground/Stylized_Grass_002_ambientOcclusion.jpg')
    const grassHeightTexture = textureLoader.load('./textures/ground/Stylized_Grass_002_height.png')
    const grassNormalTexture = textureLoader.load('./textures/ground/Stylized_Grass_002_normal.jpg')
    const grassRoughnessTexture = textureLoader.load('./textures/ground/Stylized_Grass_002_roughness.jpg')
    
    grassTexture.repeat.set(8,8)
    grassAOTexture.repeat.set(8,8)
    grassHeightTexture.repeat.set(8,8)
    grassNormalTexture.repeat.set(8,8)
    grassRoughnessTexture.repeat.set(8,8)

    grassTexture.wrapS = THREE.RepeatWrapping
    grassAOTexture.wrapS = THREE.RepeatWrapping
    grassHeightTexture.wrapS = THREE.RepeatWrapping
    grassNormalTexture.wrapS = THREE.RepeatWrapping
    grassRoughnessTexture.wrapS = THREE.RepeatWrapping
    
    grassTexture.wrapT = THREE.RepeatWrapping
    grassAOTexture.wrapT = THREE.RepeatWrapping
    grassHeightTexture.wrapT = THREE.RepeatWrapping
    grassNormalTexture.wrapT = THREE.RepeatWrapping
    grassRoughnessTexture.wrapT = THREE.RepeatWrapping
    //grass end
    
    //house textures
    const doorColorTexture = textureLoader.load('./textures/door/Wood_Door_002_basecolor.jpg')
    const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
    const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/Wood_Door_002_ambientOcclusion.jpg')
    const doorHeightTexture = textureLoader.load('./textures/door/Wood_Door_002_height.png')
    const doorNormalTexture = textureLoader.load('./textures/door/Wood_Door_002_normal.jpg')
    const doorMetalnessTexture = textureLoader.load('./textures/door/Wood_Door_002_metallic.jpg')
    const doorRoughnessTexture = textureLoader.load('./textures/door/Wood_Door_002_roughness.jpg')

    const bricksColorTexture = textureLoader.load('./textures/bricks/Brick_Wall_018_basecolor.jpg')
    const bricksAmbientOcclusionTexture = textureLoader.load('./textures/bricks/Brick_Wall_018_ambientOcclusion.jpg')
    const bricksNormalTexture = textureLoader.load('./textures/bricks/Brick_Wall_018_normal.jpg')
    const bricksRoughnessTexture = textureLoader.load('./textures/bricks/Brick_Wall_018_roughness.jpg')
    const brickHeightTexture = textureLoader.load('./textures/bricks/Brick_Wall_018_height.png')


    const roofColorTexture = textureLoader.load('./textures/roof/Tiles_Stone_001_basecolor.jpg')
    const roofAmbientOcclusionTexture = textureLoader.load('./textures/roof/Tiles_Stone_001_ambientOcclusion.jpg')
    const roofNormalTexture = textureLoader.load('./textures/roof/Tiles_Stone_001_normal.jpg')
    const roofRoughnessTexture = textureLoader.load('./textures/roof/Tiles_Stone_001_roughness.jpg')
    const roofHeightTexture = textureLoader.load('./textures/roof/Tiles_Stone_001_height.png')


    roofColorTexture.repeat.set(8,3)
    roofAmbientOcclusionTexture.repeat.set(8,3)
    roofHeightTexture.repeat.set(8,3)
    roofNormalTexture.repeat.set(8,3)
    roofRoughnessTexture.repeat.set(8,3)

    roofColorTexture.wrapS = THREE.RepeatWrapping
    roofAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
    roofHeightTexture.wrapS = THREE.RepeatWrapping
    roofNormalTexture.wrapS = THREE.RepeatWrapping
    roofRoughnessTexture.wrapS = THREE.RepeatWrapping

    roofColorTexture.wrapT = THREE.RepeatWrapping
    roofAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
    roofHeightTexture.wrapT = THREE.RepeatWrapping
    roofNormalTexture.wrapT = THREE.RepeatWrapping
    roofRoughnessTexture.wrapT = THREE.RepeatWrapping
    //house end

    //graves
    const graveColorTexture = textureLoader.load('./textures/graves/Substance_Graph_BaseColor.jpg')
    const graveAmbientOcclusionTexture = textureLoader.load('./textures/graves/Substance_Graph_AmbientOcclusion.jpg')
    const graveHeightTexture = textureLoader.load('./textures/graves/Substance_Graph_Height.png')
    const graveNormalTexture = textureLoader.load('./textures/graves/Substance_Graph_Normal.jpg')
    const graveRoughnessTexture = textureLoader.load('./textures/graves/Substance_Graph_Roughness.jpg')
    //graves end

    //bushes 
    const bushColorTexture = textureLoader.load('./textures/bushes/Hedge_001_BaseColor.jpg')
    const bushAmbientOcclusionTexture = textureLoader.load('./textures/bushes/Hedge_001_BaseColor.jpg')
    const bushHeightTexture = textureLoader.load('./textures/bushes/Hedge_001_BaseColor.jpg')
    const bushNormalTexture = textureLoader.load('./textures/bushes/Hedge_001_BaseColor.jpg')
    const bushRoughnessTexture = textureLoader.load('./textures/bushes/Hedge_001_BaseColor.jpg')


    bushColorTexture.repeat.set(8,3)
    bushAmbientOcclusionTexture.repeat.set(8,3)
    bushHeightTexture.repeat.set(8,3)
    bushNormalTexture.repeat.set(8,3)
    bushRoughnessTexture.repeat.set(8,3)

    bushColorTexture.wrapS = THREE.RepeatWrapping
    bushAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
    bushHeightTexture.wrapS = THREE.RepeatWrapping
    bushNormalTexture.wrapS = THREE.RepeatWrapping
    bushRoughnessTexture.wrapS = THREE.RepeatWrapping

    bushColorTexture.wrapT = THREE.RepeatWrapping
    bushAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
    bushHeightTexture.wrapT = THREE.RepeatWrapping
    bushNormalTexture.wrapT = THREE.RepeatWrapping
    bushRoughnessTexture.wrapT = THREE.RepeatWrapping


    //bark
    const barkColorTexture = textureLoader.load('./textures/bark/Bark_007_BaseColor.jpg')
    const barkAmbientOcclusionTexture = textureLoader.load('./textures/bark/Bark_007_AmbientOcclusion.jpg')
    const barkHeightTexture = textureLoader.load('./textures/bark/Bark_007_Height.png')
    const barkNormalTexture = textureLoader.load('./textures/bark/Bark_007_Normal.jpg')
    const barkRoughnessTexture = textureLoader.load('./textures/bark/Bark_007_Roughness.jpg')


    barkColorTexture.wrapS = THREE.RepeatWrapping
    barkAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
    barkHeightTexture.wrapS = THREE.RepeatWrapping
    barkNormalTexture.wrapS = THREE.RepeatWrapping
    barkRoughnessTexture.wrapS = THREE.RepeatWrapping

    barkColorTexture.wrapT = THREE.RepeatWrapping
    barkAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
    barkHeightTexture.wrapT = THREE.RepeatWrapping
    barkNormalTexture.wrapT = THREE.RepeatWrapping
    barkRoughnessTexture.wrapT = THREE.RepeatWrapping

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)


/**
 * Objects
*/

grassTexture.minFilter = THREE.NearestFilter
const materialGround = new THREE.MeshStandardMaterial({
    map: grassTexture,
    aoMap: grassAOTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
    displacementMap: grassHeightTexture,
    displacementScale: 0

})

const ground = new THREE.Mesh(
    new THREE.BoxGeometry(50,0.4,50,1,10,10),
    materialGround
    
)
ground.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(ground.geometry.attributes.uv.array, 2))
ground.position.z = 0
ground.position.x = 0
ground.position.y = 0
ground.rotation.x = 0

scene.add(ground)

console.log("ground created");

/**
 * models
 */
const foxModel = new THREE.Group()
let mixer = null

gltfLoader.load(
    './models/Fox/glTF/Fox.gltf',
    (gltf) =>
    {
        gltf.scene.scale.set(0.005, 0.005, 0.005)
        foxModel.add(gltf.scene)
        mixer = new THREE.AnimationMixer(gltf.scene) // Animation
        const action = mixer.clipAction(gltf.animations[2])
        action.play()
    }
    
)


scene.add(foxModel)
foxModel.rotation.y = 2.5

/**
 * fireflies 
 */
const fireflygroup = new THREE.Group()


let fireflyGeo = null
let fireflyMat = null
let firefliesMesh = null
let fireflyLight = null
const generateFireFlies = () =>
{
    fireflyGeo = new THREE.BoxGeometry(0.03,0.03,0.03)
    fireflyMat = new THREE.MeshToonMaterial({color:'black'})
    
    for(let i =0; i<6;i++)
    {

        const angle = Math.random() * Math.PI * 2
        const radius = 5 + Math.random() * 15
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        firefliesMesh = new THREE.Mesh(fireflyGeo,fireflyMat)
        firefliesMesh.castShadow = true
        fireflyLight = new THREE.PointLight('orange',1,4)
        fireflyLight.position.set(x,2,z)
        firefliesMesh.position.set(x,2,z)
        fireflyLight.castShadow= true
        fireflygroup.add(firefliesMesh,fireflyLight)
    }
   
}
generateFireFlies()

scene.add(fireflygroup)


/**
 * ground details
 */
const ground_Details = new THREE.Group()

/**
 * rocks 
 */
const rockParams = {}
rockParams.amount = 10;
rockParams.visible = true

let rockGeometry = null
let rockMaterial = null
let rockmesh = null
console.time('rocks')
const generateRock = () =>
{
    if(rockmesh !==null)
    {
        rockGeometry.dispose()
        rockMaterial.dispose()
        ground_Details.remove(rockmesh)//clears scene of points, geometry, material for preparing generation of new galaxy in the GUI
    }
     rockGeometry = new THREE.DodecahedronGeometry(0.1,1)
     rockMaterial = new THREE.MeshToonMaterial({
       map:rockTexture,
       aoMap:rockAOTexture,
       displacementMap:rockHeightTexture,
       displacementScale: 0.001,
       normalMap: rockNormalTexture
    })

       rockmesh= new THREE.InstancedMesh(rockGeometry,rockMaterial,rockParams.amount)
       rockmesh.castShadow = true
        ground_Details.add(rockmesh)
        const dummy = new THREE.Object3D()
        for(let i =0; i <rockParams.amount;i++)
        {
            dummy.position.x=  (Math.random() - 0.5) * 49.7 
            dummy.position.z= (Math.random() - 0.5) * 49.7
            dummy.position.y=  .2 
            dummy.rotation.x = Math.random() * Math.PI * 3
            const randomScale = (Math.random()+ 0.3) * 1
            dummy.scale.set(randomScale,randomScale,randomScale + (Math.random()+ 0.1) * 1) //XYZ Z being randomed a bit more to change shape
            
            dummy.updateMatrix()
            rockmesh.setMatrixAt(i,dummy.matrix)
        }
        rockmesh.visible = rockParams.visible

}
generateRock()
console.timeEnd('rocks')

/**
 * trees
 */
const treeParams = {}
treeParams.amount = 100;
treeParams.visible = true

let tree = null
let treeBranchGeo = null
let treeBranchMaterial = null
let treeBodyGeo = null
let treeBodyMaterial = null
let treebody = null
let treeBranchmid = null
let treeBranchTop = null

console.time('tree')

const generateTree = () =>
{
    if(treebody !== null)
    {
        treeBranchGeo.dispose()
        treeBranchMaterial.dispose()
        treeBodyGeo.dispose()
        treeBodyMaterial.dispose()
        tree.remove(treebody,treeBranchmid,treeBranchTop)
    }

 treeBodyGeo = new THREE.CylinderGeometry(0.2,0.2,.5,360)
 treeBodyMaterial = new THREE.MeshStandardMaterial({    
    map:barkColorTexture,
    aoMap: barkAmbientOcclusionTexture,
    normalMap: barkNormalTexture,
    displacementMap: barkHeightTexture,
    displacementScale: 0.001,
    roughnessMap: barkRoughnessTexture

})
 treeBranchGeo = new THREE.ConeGeometry(.7,1.2)
 treeBranchMaterial = new THREE.MeshStandardMaterial({
    map:bushColorTexture,
    aoMap: bushAmbientOcclusionTexture,
    normalMap: bushNormalTexture,
    displacementMap: bushHeightTexture,
    displacementScale: 0.001,
    roughnessMap: bushRoughnessTexture
})
tree = new THREE.Group()

 treebody = new THREE.InstancedMesh(treeBodyGeo,treeBodyMaterial,treeParams.amount)
 treeBranchmid = new THREE.InstancedMesh(treeBranchGeo,treeBranchMaterial,treeParams.amount)
 treeBranchTop = new THREE.InstancedMesh(treeBranchGeo,treeBranchMaterial,treeParams.amount)
 treeBranchmid.position.set(0,1.5,0)
 treeBranchTop.position.set(0,1,0)
 treebody.position.set(0,.2,0)
 treeBranchmid.castShadow = true
 treeBranchTop.castShadow = true

 tree.add(treebody,treeBranchmid,treeBranchTop)
 ground_Details.add(tree)
const Treedummy = new THREE.Object3D()
for(let i =0; i <treeParams.amount;i++)
{const angle = Math.random() * Math.PI * 2
    const radius = 10 + Math.random() * 15
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    Treedummy.position.x=  x
    Treedummy.position.z= z
    Treedummy.position.y=  (Math.random() - 0) * 0.2
    
    const randomScale = 1//(Math.random()+ 0.3) * 1
    Treedummy.scale.set(randomScale,randomScale,randomScale ) //XYZ Z being randomed a bit more to change shape
    
    Treedummy.updateMatrix()
    treebody.setMatrixAt(i,Treedummy.matrix)
    treeBranchmid.setMatrixAt(i,Treedummy.matrix)
    treeBranchTop.setMatrixAt(i,Treedummy.matrix)
}
treebody.visible = treeParams.visible
treeBranchmid.visible = treeParams.visible
treeBranchTop.visible = treeParams.visible
}
generateTree()
console.timeEnd('tree')





/**
 * House
 */
const house = new THREE.Group()
scene.add(house)
//Door light
const doorLight = new THREE.PointLight('#ff7d46',1,7)
doorLight.position.set(0,2.2,2.7)
doorLight.castShadow =true
house.add(doorLight)
//walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4,2.5,4),
    new THREE.MeshStandardMaterial({
        map: bricksColorTexture,
        aoMap:bricksAmbientOcclusionTexture,
        normalMap:bricksNormalTexture,
        roughnessMap:bricksRoughnessTexture,
        displacementMap:brickHeightTexture,
        displacementScale: 0
    })
    )
    walls.position.y = 2.5 /2
    walls.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2))
    house.add(walls)

    //roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5,1,4),
    new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofAmbientOcclusionTexture,
        normalMap: roofNormalTexture,
        displacementMap: roofHeightTexture,
        displacementScale: 0,
        roughnessMap: roofRoughnessTexture
    })

)
roof.position.y = 3
roof.rotation.y = Math.PI / 4 
house.add(roof)

//door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2,2.2,100,100),
    new THREE.MeshStandardMaterial({
        map:doorColorTexture,
        transparent:true,
        alphaMap:doorAlphaTexture,
        aoMap:doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.1,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
)
door.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2))
door.position.y = 1
door.position.z = (4 / 2) + 0.01 
house.add(door)
//bushes
const bushGeometry = new THREE.DodecahedronGeometry(1,1)
const bushMaterial = new THREE.MeshStandardMaterial({
    map:bushColorTexture,
    aoMap: bushAmbientOcclusionTexture,
    normalMap: bushNormalTexture,
    displacementMap: bushHeightTexture,
    displacementScale: 0,
    roughnessMap: bushRoughnessTexture
})
const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)


bush1.scale.set(0.5,0.5,0.5)
bush1.position.set(0.8,0.2,2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)

bush2.scale.set(0.25,0.25,0.25)
bush2.position.set(1.4,0.1,2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)

bush3.scale.set(0.4,0.4,0.4)
bush3.position.set(-0.8,0.1,2.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)

bush4.scale.set(0.15,0.15,0.15)
bush4.position.set(-1,0.1,2.6)

house.add(bush1,bush2,bush3,bush4)


/**
 * graves
 */
const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6,0.8,0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveAmbientOcclusionTexture,
    aoMapIntensity: .2,
    normalMap: graveNormalTexture,
    displacementMap: graveHeightTexture,
    displacementScale: 0,
    roughnessMap: graveRoughnessTexture

})
/**
 *  grave Fonts
 */

const fontLoader = new FontLoader()
fontLoader.load(
    './fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const graveTextGeo = new TextGeometry(
            'R.I.P',//text
            {
                font: font,
                size: 0.1,
                height: 0.05,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.02,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 4

            }
        )
        const graveTextMat = new THREE.MeshStandardMaterial({map:graveColorTexture, color:'rgb(90,90,90)'})
        
        graveTextGeo.center()
        for(let i= 0; i<30; i++)
        {          
        const angle = Math.random() * Math.PI * 2
        const radius = 3 + Math.random() * 6 //radius of spawning graves outside of 3R
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        const rotationY = (Math.random()-0.5) *0.4
        const rotataionZ = (Math.random()-0.5) * 0.4
        const text = new THREE.Mesh(graveTextGeo, graveTextMat)
         text.position.set(x ,0.6,z+0.1)
         text.rotation.y = rotationY
         text.rotation.z = rotataionZ
         text.castShadow = true
        const grave = new THREE.Mesh(graveGeometry,graveMaterial)
        grave.position.set(x,0.4,z)
        grave.rotation.y = rotationY
        grave.rotation.z = rotataionZ
        grave.castShadow = true
        graves.add(grave,text)
        }
    }
)




scene.add(ground_Details)


/**
 * sky details
 */
const skyDetails = new THREE.Group()

const galaxyParameters= {}
galaxyParameters.count = 10000
galaxyParameters.Pointsize = 0.01
galaxyParameters.radius = 5
galaxyParameters.branches = 3
galaxyParameters.spin = 3
galaxyParameters.randomness = 0.02
galaxyParameters.randomnessPower = 3
galaxyParameters.insideColors = 'rgb(205,100,50)'
galaxyParameters.outsideColors = 'rgb(0,0,150)'
galaxyParameters.locationY = 9
galaxyParameters.locationX = -22
galaxyParameters.locationZ = -27
galaxyParameters.angleX = 80
galaxyParameters.angleY = 50
galaxyParameters.angleZ = 70
galaxyParameters.visible = false
let geometry = null
let material = null
let galaxyPoints = null

console.time('galaxy')
const generateGalaxy = () =>
{
    //disposer
    if(galaxyPoints !==null)
    {
        geometry.dispose()
        material.dispose()
        skyDetails.remove(galaxyPoints)//clears scene of points, geometry, material for preparing generation of new galaxy in the GUI
    }

    /**
     * geometry
     */
     geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(galaxyParameters.count * 3)//initialise positions
    const colors = new Float32Array(galaxyParameters.count * 3)

    const colorInside = new THREE.Color(galaxyParameters.insideColors)
    const colorOutside = new THREE.Color(galaxyParameters.outsideColors) 



    for(let i =0; i < galaxyParameters.count; i++)
    {
        const i3 = i *3
        //positions

        const radius = Math.random() * galaxyParameters.radius
        const spinAngle = radius * galaxyParameters.spin
        const branchAngle = (i % galaxyParameters.branches) / galaxyParameters.branches * Math.PI * 2

        const randomX = Math.pow(Math.random(), galaxyParameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)       
        const randomY = Math.pow(Math.random(), galaxyParameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)       
        const randomZ = Math.pow(Math.random(), galaxyParameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)       

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX//order top to bottom X Y Z 
        positions[i3 +1] = randomY
        positions[i3 +2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
        //colors
        const minxedColor = colorInside.clone()
        minxedColor.lerp(colorOutside, radius / galaxyParameters.radius)

        colors[i3 + 0] = minxedColor.r //mixes colours depending on rgb value position r = 0 g = 1 b = 2 
        colors[i3 + 1] = minxedColor.g
        colors[i3 + 2] = minxedColor.b

    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions,3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors,3))

/**
 * material
 */
 material = new THREE.PointsMaterial({
    size: galaxyParameters.Pointsize,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true
})

/**
 * points
 */
galaxyPoints = new THREE.Points(geometry, material)
galaxyPoints.position.x = galaxyParameters.locationX
galaxyPoints.position.y = galaxyParameters.locationY
galaxyPoints.position.z = galaxyParameters.locationZ
galaxyPoints.rotation.x = galaxyParameters.angleX
galaxyPoints.rotation.y = galaxyParameters.angleY
galaxyPoints.rotation.z = galaxyParameters.angleZ
galaxyPoints.visible = galaxyParameters.visible
skyDetails.add(galaxyPoints)


}
generateGalaxy()
console.timeEnd('galaxy')

console.time('clouds')
const cloudParameters = {}
cloudParameters.count = 100
cloudParameters.visible = true
cloudParameters.rotationY = 50
let cloudGeo = null
let cloudMat = null
let cloudMesh = null

const generateCloud = () =>
{
    if(cloudMesh !==null)
    {
        cloudGeo.dispose()
        cloudMat.dispose()
        skyDetails.remove(cloudMesh)
    }
    cloudGeo = new THREE.DodecahedronGeometry(1,1)

    cloudMat = new THREE.MeshStandardMaterial({color:'rgb(208,204,204)',transparent:true,opacity:0.4})

    cloudMesh = new THREE.InstancedMesh(cloudGeo,cloudMat,cloudParameters.count)
    skyDetails.add(cloudMesh)
    cloudMesh.rotation.y = cloudParameters.rotationY
    cloudMesh.castShadow = true
    const cloudDummy = new THREE.Object3D()
    for(let i = 0; i< cloudParameters.count; i++)
    {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 50
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        cloudDummy.position.x = x 
        cloudDummy.position.y = (Math.random() + 1) * 10
        cloudDummy.position.z= z

        const cloudSize = (Math.random() -0.3) * 3
        cloudDummy.scale.set(cloudSize,cloudSize,cloudSize + Math.random() *.5)
        cloudDummy.updateMatrix()
        cloudMesh.setMatrixAt(i,cloudDummy.matrix)
    }
    cloudMesh.visible = cloudParameters.visible
}
generateCloud()

console.timeEnd('clouds')

scene.add(skyDetails)


/**
 * lights
 */

const lightParam = {}
lightParam.level = 1
const pointLight = new THREE.PointLight('rgb(80,104,134)', lightParam.level,100,.7)
pointLight.intensity = 0.5
pointLight.position.x = 0
pointLight.position.y = 30
pointLight.position.z = -2
scene.add(pointLight)


const ambientLight = new THREE.AmbientLight('rgb(80,104,134)',.2)
scene.add(ambientLight)



// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * double click for fullscreen
 * nested if to allow for use on safari as document.fullscreenElement doesnt work on safari
 */

window.addEventListener('dblclick', () =>{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement 

if(!fullscreenElement)
{
    if(canvas.requestFullscreen)//standard browsers
    {
        canvas.requestFullscreen()
    }
    else if(canvas.webkitRequestFullscreen)//safari browser 
    {
        canvas.requestFullscreen()
    }
    console.log("go full")
}
else
{
    if(document.exitFullscreen)
    {
        document.exitFullscreen()
    }
    else if (document.webkitExitFullscreen)
    {
        document.webkitExitFullscreen()
    }
    console.log("no full")
}
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 150)
//initial camera position
camera.position.z =10
camera.position.y = 4
camera.position.x = -3

console.log(camera.position.length());
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * shadows
 */
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
pointLight.castShadow =true
ground.receiveShadow = true


/**
 * GUI options
 */

const groundDetails = gui.addFolder('ground details')
groundDetails.add(rockParams,'amount').min(10).max(400).step(10).name('amount of rocks').onFinishChange(generateRock)
groundDetails.add(rockParams, 'visible').onChange(generateRock)
groundDetails.add(treeParams, 'amount').min(10).max(400).step(10).name('amount of tree').onFinishChange(generateTree)
groundDetails.add(treeParams, 'visible').onChange(generateTree)

const weather = gui.addFolder('weather')
weather.add(fogParam, 'intensity').min(0).max(1).step(0.01).onFinishChange(fogt).name("fog intensity")
weather.add(fogParam, 'distance').min(10).max(150).step(1).onFinishChange(fogt).name("fog distance")
weather.add(cloudParameters,'visible').onChange(generateCloud).name("cloud visible")

const lightlocation = gui.addFolder('light')
lightlocation.add(pointLight.position,'x').min(-100).max(100).step(1)
lightlocation.add(pointLight.position,'y').min(-10).max(100).step(1)
lightlocation.add(pointLight.position,'z').min(-100).max(100).step(1)
lightlocation.add(pointLight,'intensity').min(0).max(1).step(0.1).name("night-day")

const galaxyFolder = gui.addFolder('galaxy')
galaxyFolder.add(galaxyParameters, 'count').min(100).max(100000).step(1000).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'Pointsize').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'radius').min(0.01).max(10).step(0.01).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
galaxyFolder.addColor(galaxyParameters, 'insideColors').onFinishChange(generateGalaxy)
galaxyFolder.addColor(galaxyParameters, 'outsideColors').onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'locationY').min(0).max(50).step(1).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'locationX').min(-50).max(50).step(1).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'locationZ').min(-50).max(50).step(1).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'angleX').min(0).max(180).step(10).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'angleY').min(0).max(180).step(10).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'angleZ').min(0).max(180).step(10).onFinishChange(generateGalaxy)
galaxyFolder.add(galaxyParameters, 'visible').onChange(generateGalaxy)


// Animate
const clock = new THREE.Clock()
let previousTime = 0
//update animation frames
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    //model animations 
    if(mixer)
    {
        mixer.update(deltaTime)
    }
    //cloud
    cloudMesh.rotation.y += 0.0001

    //model location
    const foxAngle = elapsedTime * 0.5
    foxModel.position.x = -Math.cos(foxAngle) *10
    foxModel.position.z = -Math.sin(foxAngle) *10
    foxModel.position.y = .2

    foxModel.rotation.y -=  0.0033 //0.0004
    

    //update camera position

    camera.lookAt(ground.position)
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
    
}

tick()