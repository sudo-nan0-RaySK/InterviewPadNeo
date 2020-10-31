import React from 'react'
import { Button, Container, Card } from 'popcom';
import './Questions.css'


function Questions({ questionTitle, questionDescription, sampleTests }) {
    return (
        <div className="question-box">
            <div className="title box-item">
                <Container>
                    <h2>{questionTitle}</h2>
                </Container>
            </div>

            <div className="desc box-item">
                <Container>
                    <Card>
                        <p>{questionDescription}</p>
                    </Card>
                </Container>
            </div>

            <div className="test-cases box-item">
                <Container>
                    <Card markdownEnabled vertical>
                        {sampleTests}
                    </Card>
                    
                </Container>
            </div>
            <div className="theme-default box-item">
                <Button variant="primary"> Next Question </Button>
                <div className="spacer"></div>
                <Button variant="success"> Previous Question</Button>
            </div>
        </div>
    );
}

export default Questions

