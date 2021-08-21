// list of all information
const allReviews = [
    {
        id:1,
        name: "Sarah Blinks",
        job: "Ux Designer",
        img: "./images/user2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque aut reprehenderit libero similique, nihil culpa animi eveniet aliquid voluptate.",
    },
    {
        id:1,
        name: "Sharon Blinks",
        job: "Front-end Developer",
        img: "./images/tea2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque aut reprehenderit libero similique, nihil culpa animi eveniet aliquid voluptate.",
    },
    {
        id: 3,
        name: "Samuel Apreku",
        job: "Prototype Designer",
        img: "./images/user1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque aut reprehenderit libero similique, nihil culpa animi eveniet aliquid voluptate.",
    },
    {
        id: 4,
        name: "Joseph Dosh",
        job: "Back-end Developer",
        img: "./images/work_thumb_1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque aut reprehenderit libero similique, nihil culpa animi eveniet aliquid voluptate.",
    },
    {
        id: 5,
        name: "Vicent Mckay",
        job: "System Analyst",
        img: "./images/tea4.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque aut reprehenderit libero similique, nihil culpa animi eveniet aliquid voluptate.",
    },
]

// selecting DOM properties
const staff_Name = document.querySelector('#name');
const staff_Job = document.querySelector('#job');
const testimonial = document.querySelector('#testimonial');
const img = document.querySelector('img');
const btns = document.querySelectorAll('button');

let counter = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    display(counter);
});

// function to display all details
function display(num) {
    staff_Name.textContent = allReviews[num].name;
    staff_Job.textContent = allReviews[num].job;
    testimonial.textContent = allReviews[num].text;
    img.src = allReviews[num].img;
}

btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        if (btn.classList.contains("next")) {
            counter++;
            if (counter > allReviews.length - 1) {
                counter = 0;
            }
        }
        display(counter);
        if (btn.classList.contains("prev")){
            counter--;
            if (counter < 0) {
                counter = allReviews.length - 1;
            }
        }
        display(counter);
    })
});

