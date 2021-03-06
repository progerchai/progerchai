import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img' // 引入渲染图片所需要的组件和系统
import { Spine, SpineSystem } from '@eva/plugin-renderer-spine'
import { DragonBone, DragonBoneSystem } from '@eva/plugin-renderer-dragonbone'

// resource.addResource([
//     {
//         name: 'image1',
//         type: RESOURCE_TYPE.IMAGE,
//         src: {
//             image: {
//                 type: 'png',
//                 url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
//             },
//         },
//         preload: true,
//     },
//     {
//         name: 'image2',
//         type: RESOURCE_TYPE.IMAGE,
//         src: {
//             image: {
//                 type: 'png',
//                 url: 'https://gw.alicdn.com/tfs/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
//             },
//         },
//         preload: true,
//     },
// ])
// // 加入骨骼动画数据资源
// resource.addResource([
//     {
//         name: 'anim',
//         type: 'SPINE',
//         src: {
//             ske: {
//                 type: 'json',
//                 url: '/proger2020/files/evaData.json',
//             },
//             atlas: {
//                 type: 'atlas',
//                 url: '/proger2020/files/evaData.atlas',
//             },
//             image: {
//                 type: 'png',
//                 url: 'https://gw.alicdn.com/tfs/TB1YHC8Vxz1gK0jSZSgXXavwpXa-711-711.png',
//             },
//         },
//     },
// ])

resource.addResource([
    {
        name: 'dragonbone',
        type: RESOURCE_TYPE.DRAGONBONE,
        src: {
            image: {
                type: 'png',
                url: 'https://gw.alicdn.com/tfs/TB1RIpUBhn1gK0jSZKPXXXvUXXa-1024-1024.png',
            },
            tex: {
                type: 'json',
                url: '/proger2020/files/dragonbone_tex.json', // 加了proxy代理，否则本地跑会跨域，对应json文件在src/目录下
            },
            ske: {
                type: 'json',
                url: '/proger2020/files/dragonbone_ske.json',
            },
        },
        preload: true,
    },
]);


// 创建渲染系统
const rendererSystem = new RendererSystem({
    canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
    width: 750,
    height: 1000,
    // transparent: false,
    resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
    enableScroll: true, // 允许页面滚动
    renderType: 0, // 0:自动判断，1: WebGL，2:Canvas
})

// 创建游戏对象
const game = new Game({
    frameRate: 60, // 可选，游戏帧率，默认60
    autoStart: false, // 可选，自动开始
    systems: [rendererSystem, new DragonBoneSystem()],
})

// 此处还在考虑如何设置默认场景的宽高
game.scene.transform.size = {
    width: 750,
    height: 1000
}

// game.addSystem(new ImgSystem()) // 给游戏添加渲染图片的能力

// const gameObject = new GameObject('gameObj1', {
//     size: {
//         width: 750,
//         height: 1000,
//     },
// })
// const gameObject2 = new GameObject('spine', {
//     anchor: {
//         x: 0.5,
//         y: 0.5,
//     },
//     scale: {
//         x: 0.5,
//         y: 0.5,
//     },
// })
// dragonbone 的 origin 是失效的，将会按照dragonbone设计时的坐标重点定位
const dragonBone = new GameObject('db', {
    anchor: {
        x: 0.5,
        y: 0.5,
    },
});

// const spine = new Spine({ resource: 'anim', animationName: 'idle' })

// // gameObject2.addComponent(spine)

// spine.on('complete', e => {
//     console.log('动画播放结束', e.name)
// })

const db = dragonBone.addComponent(
    new DragonBone({
        resource: 'dragonbone',
        armatureName: 'armatureName',
    }),
);

db.on('start', () => {
    console.log('db start')
})
db.on('complete', () => {
    console.log('db complete')
})

db.play();
game.scene.addChild(dragonBone);

// spine.play('idle')
// game.scene.addChild(gameObject2) //动画对象放入场景

// gameObject.addComponent(
//   new Img({
//     resource: 'image1',
//   }),
// )

// game.scene.addChild(gameObject) // 把游戏对象放入场景，这样画布上就可以显示这张图片了

// gameObject.addComponent(
//     new Img({
//         resource: 'image1',
//     }),
// )

game.start()
// console.log('game:', game, gameObject, gameObject2)

