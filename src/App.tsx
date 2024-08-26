// import IconMinus from "./components/icons/IconMinus"
import clsx from "clsx"
import Accordion from "./components/template"
import IconStar from "./components/icons/IconStar"

function App() {

  return (
    <div className={clsx('bg-pink-light min-h-screen flex flex-col justify-center items-center p-4')}>
        <Accordion.Root>
            <Accordion.Title logo={<IconStar />} > 
              <h1>faq<span className="lowercase">s</span></h1>
            </Accordion.Title>
            <Accordion.Items>
                <Accordion.Header showIcon>
                  <p>What is Frontend Mentor, and how will it help me</p>
                </Accordion.Header>
                 <Accordion.Content></Accordion.Content>
            </Accordion.Items>  
            <Accordion.Items>
                <Accordion.Header showIcon> <p>Is Frontend Mentor free? </p></Accordion.Header>
                <Accordion.Content>
                  <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option 
                    providing access to a range of projects suitable for all skill levels.</p>
                </Accordion.Content>
            </Accordion.Items> 
            <Accordion.Items>
                <Accordion.Header showIcon><p>Can I use Frontend Mentor projects in my portfolio?</p></Accordion.Header>
                <Accordion.Content>
                  <p>Yes, you can use projects completed on Frontend Mentor in your portfolio.
                  It's an excellent way to showcase your skills to potential employers!</p>
                </Accordion.Content>
            </Accordion.Items> 
            <Accordion.Items>
                <Accordion.Header showIcon>
                    <p>How can I get help if I'm stuck on a challenge?</p>
                </Accordion.Header>
                <Accordion.Content>
                    <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel 
                    where you can ask questions and seek support from other community members.</p>
                </Accordion.Content>
            </Accordion.Items> 
            
        </Accordion.Root>
    </div>
  )
}

export default App
