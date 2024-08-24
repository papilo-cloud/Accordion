// import IconMinus from "./components/icons/IconMinus"
import clsx from "clsx"
import Accordion from "./components/template"

function App() {

  return (
    <div className={clsx('bg-pink-light min-h-screen flex flex-col justify-center items-center p-4')}>
        <Accordion.Root>
            <Accordion.Heading >
              <h1>faq<span className="lowercase">s</span></h1>
            </Accordion.Heading>

            <Accordion.ContentRoot showIcon={true}>
                <span>What is Frontend Mentor, and how will it help me?</span>
                <p>Frontend Mentor offers realistic coding challenges to help developers 
                  improve their frontend coding skills with projects in HTML, CSS, and JavaScript.
                It's suitable for all levels and ideal for portfolio building.</p>
            </Accordion.ContentRoot>  
            <Accordion.ContentRoot showIcon={true}>
                <span>Is Frontend Mentor free? </span>
                <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option 
                  providing access to a range of projects suitable for all skill levels.</p>
            </Accordion.ContentRoot> 
            <Accordion.ContentRoot showIcon={true}>
                <span>Can I use Frontend Mentor projects in my portfolio?</span>
                <p>Yes, you can use projects completed on Frontend Mentor in your portfolio.
                    It's an excellent way to showcase your skills to potential employers!</p>
            </Accordion.ContentRoot> 
            <Accordion.ContentRoot showIcon={true}>
                <span>How can I get help if I'm stuck on a challenge?</span>
                <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel 
                  where you can ask questions and seek support from other community members.</p>
            </Accordion.ContentRoot> 
            
        </Accordion.Root>
    </div>
  )
}

export default App
