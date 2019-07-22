const container = document.querySelector('#project_bullnose');
const links = container.querySelectorAll('ul.links > li');
const projectContents = container.querySelectorAll('div.project-content');
console.log( links );
console.log( projectContents );
// console.log( projectContentItems );

// Select tab content item
function selectProject (e) {
    // Disable red on other tabs
    removeShow();

    // Add red border to current tab
    // this.classList.add('active');

    // Grab content item from DOM
     console.log(this.id);  
    
     const projectContent = document.querySelector(`#${this.id}-content`);
    // console.log(projectContent);
     // Add show class
     projectContent.classList.add('show');

   

}


function removeShow() {
    projectContents.forEach( item => item.classList.remove('show'));
}

links.forEach( item => item.addEventListener( 'click', selectProject));