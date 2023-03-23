window.onload = () =>{
    // module aliases
    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite;


    //create an engine
    let engine = Engine.create();

    //create a render
    let render = Render.create({
        element: document.body, //in html body tag
        engine: engine
    });

    //create two boxes and a ground
    let box1 = Matter.Bodies.rectangle(400,200,80,80);
    let box2 = Matter.Bodies.rectangle(450,50,80,80);
    let ground = Matter.Bodies.rectangle(400,610,810,60,{isStatic: true});
    let circle = Matter.Bodies.circle(400,200,40);

    //add all of bodies to the world
    Composite.add(engine.world,[box1,box2,ground,circle]);

    //run the renderer
    Render.run(render);

    //create runner
    let runner = Runner.create();

    //run the engine
    Runner.run(runner,engine);
}