import React from 'react'
import './About.css';
export const About = () => {
  return (
    <div className='aboutcontainer'>
      <div className='aboutme'>
      "Hi there! I'm Sakshi Rana, a passionate frontend developer with a focus on crafting intuitive and user-friendly web experiences. I take pride in being a part of developing TaskCart, an exciting project that allowed me to bring my creative ideas to life.I'm constantly exploring new libraries and staying up-to-date with the latest trends in frontend development."
      </div>
      <div>
        <h1 className='abouthead'>TaskCart</h1>
        <div className='aboutsubcontainer'>TaskCart is a revolutionary project that brings together the convenience of online shopping and efficient task management, all in one place. Our vision is to simplify the lives of busy individuals by offering a unified platform for organizing both their shopping requirements and daily responsibilities.</div>
      </div>
      <div className='featurecontainer'>
        <ul>
          <h4>Shopping Cart Features:</h4>
          <li>Smart Shopping: Add items to your cart from your favorite online stores with just a click. TaskCart intelligently extracts product details and images, making shopping a breeze.</li>
          <li>Easy To Modify:User Can easily modified there things in cart like Deleted item from cart.</li>
          <li>Price Tracking: Worried about the best time to make a purchase? TaskCart tracks prices and notifies you when there's a drop, ensuring you never miss a deal.</li>
        </ul>
      </div>
      <div className='featurecontainer'>
        <ul>
          <h4>To-Do List Features:</h4>
          <li>Task Creation: Easily create tasks, Delete task</li>
          <li>Keep Track: User Can also track there task like is there Task is completed or not</li>
        </ul>
      </div>
      <div className='techstack'>
        <h3>Technology Stack:</h3>
        <ul>
          <h4>Front-end:</h4>
          <li>Programming Languages: e.g., HTML, CSS.</li>
          <li>Front-end Framework: e.g., React.</li>
          <li>UI Libraries: e.g., Bootstrap,Tailwand.</li>
        </ul>
        
      </div>
    </div>
  )
}
