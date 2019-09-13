import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';

import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';

import vtkOutlineFilter from 'vtk.js/Sources/Filters/General/OutlineFilter';


// --- Set up our renderer ---

const container = document.querySelector('#container');

// We use the wrapper here to abstract out manual RenderWindow/Renderer/OpenGLRenderWindow setup
const genericRenderWindow = vtkGenericRenderWindow.newInstance();
genericRenderWindow.setContainer(container);
genericRenderWindow.resize();

const renderer = genericRenderWindow.getRenderer();
const renderWindow = genericRenderWindow.getRenderWindow();


// --- Set up the cone actor ---

const actor = vtkActor.newInstance();
const mapper = vtkMapper.newInstance();

// this generates a cone
const coneSource = vtkConeSource.newInstance({
  height: 1.0,
});

// the mapper reads in the cone polydata
// this sets up a pipeline: coneSource -> mapper
mapper.setInputConnection(coneSource.getOutputPort());

// tell the actor which mapper to use
actor.setMapper(mapper);


// --- Add actor to scene ---

renderer.addActor(actor);


// --- Reset camera and render the scene ---

renderer.resetCamera();
renderWindow.render();


// --- set up our filter

const filter = vtkOutlineFilter.newInstance();

// coneSource -> filter
filter.setInputConnection(coneSource.getOutputPort());

const outlineActor = vtkActor.newInstance();
const outlineMapper = vtkMapper.newInstance();
outlineActor.setMapper(outlineMapper);

// filter -> mapper
outlineMapper.setInputConnection(filter.getOutputPort());


// --- render ---

renderer.addActor(outlineActor);
renderWindow.render();


// --- Expose globals so we can play with values in the dev console ---

global.renderWindow = renderWindow;
global.renderer = renderer;
global.coneSource = coneSource;
global.actor = actor;
global.mapper = mapper;
global.filter = filter;

// listen to changes to the filter and re-render
filter.onModified(() => {
  renderWindow.render();
});
