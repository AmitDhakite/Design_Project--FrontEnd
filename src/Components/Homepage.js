import React from 'react';
import classes from '../styles/Homepage.module.css';
import Paper from '@material-ui/core/Paper';
import Button from './Layout/Button';
import ButtonLight from './Layout/ButtonLight';
import {Link, useHistory} from 'react-router-dom';

const Homepage = ()=>{
    const history = useHistory();
    return <Paper style={{margin: "10px 20px"}}>
        <div className={classes.parent}>
            <p className={classes.title}>Inter IIIT Elective Courses Portal</p>
            <div className={classes.forParent}>
                <div className={classes.forInstitutes}>
                   <h2>For Institutes</h2> 
                   <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                   making it over 2000 years old.</p>
                   <div style={{display:"flex"}}><Link to="/signInInstitute" style={{textDecoration: "none"}}><Button name="Sign In" className={classes.button}>Sign In</Button></Link>
                   <Link to="/signUpInstitute" style={{textDecoration: "none"}}><ButtonLight name="Sign Up" className={classes.button1}>Sign Up</ButtonLight></Link></div>
                </div>
                <div className={classes.forInstitutes}>
                    <h2>For Students</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <div style={{display:"flex"}}><Link to="/signInStudent" style={{textDecoration: "none"}}><Button name="Sign In" className={classes.button}>Sign In</Button></Link>
                    <Link to="/signUpStudent" style={{textDecoration: "none"}}><ButtonLight name="Sign Up" className={classes.button1}>Sign Up</ButtonLight></Link></div>
                </div>
            </div>
        </div>
    </Paper>;
};

export default Homepage;