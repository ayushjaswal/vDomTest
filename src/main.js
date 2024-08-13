import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";


const createVApp = (count) => createElement('div', {
  attrs: {  
    id: 'app',
    dataCount: count,
  },
  children: [
  ...Array.from({length: count }, () => createElement('img', {
      attrs: {
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb210NGZkYWY4eTIzdHc1dmU0YWlnYmVtOWdpbnp4Nm0wNTBjdDYyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif"
      },
    })),
    String(count),
    createElement('img', {
      attrs: {
        src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb210NGZkYWY4eTIzdHc1dmU0YWlnYmVtOWdpbnp4Nm0wNTBjdDYyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif"
      },
    }),
  ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

let $rootElm = mount($app, document.getElementById('app'));

setInterval(() => {
  count = Math.floor(Math.random() * 10);
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootElm = patch($rootElm);
  vApp = vNewApp;
}, 1000);
