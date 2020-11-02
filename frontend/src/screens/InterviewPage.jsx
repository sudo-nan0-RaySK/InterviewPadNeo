import React from 'react'
import NavBar from '../components/NavBar';
import Questions from '../components/Questions';
import CodeEditor from '../components/CodeEditor'
import Console from '../components/Console'
import Notepad from '../components/Notepad'
import './InterviewPage.css'

const sampleData = {
    questionTitle: "Find maximum sum subarray",
    questionDescription: `Given an array A find maximum sum subarray in A
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
    `,
    sampleTests: `#### Test Case 1 : \n\n
    A = [ 1,2,3 ] , ans => 6\n\n#### Test Case 2:
    A = [-1,2,4,5,-1] , ans => 11`
}

export default function InterviewPage({language,updateLanguage}) {
    return (
        <div className="main-container">
            <NavBar className="container-item" 
            language = {language} 
            updateLanguage = {updateLanguage}/>
            <div className="container-item page-body">
                <div className="container-item questions">
                    <Questions
                        questionTitle={sampleData.questionTitle}
                        questionDescription={sampleData.questionDescription}
                        sampleTests={sampleData.sampleTests}
                    />
                </div>
                <div className="container-item editor">
                    <CodeEditor language = {language}/>
                    <Console />
                </div>
                <div className="container-item notepad-and-video">
                    <Notepad/>
                </div>
            </div>
        </div>
    );
}

