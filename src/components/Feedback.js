import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Alert from './Alert';

const { REACT_APP_API_KEY, REACT_APP_API_AD, REACT_APP_API_DBURL, REACT_APP_API_PID, REACT_APP_API_SB, REACT_APP_API_MSI, REACT_APP_API_APPID } = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_API_AD,
    databaseURL: REACT_APP_API_DBURL,
    projectId: REACT_APP_API_PID,
    storageBucket: REACT_APP_API_SB,
    messagingSenderId: REACT_APP_API_MSI,
    appId: REACT_APP_API_APPID
};
firebase.initializeApp(firebaseConfig);

export default function Feedback() {

    let count;
    let db = firebase.database()
    const [alert, setalert] = useState(null);
    document.title = 'Feedback - NewsMonkey'

    const showAlert = (type, message) => {
        setalert({
            typ: type,
            msg: message,
        })

        setTimeout(() => {
            setalert(null);
        }, 2000);
    }

    const submit = () => {
        let radio = document.getElementsByName('radio');
        let checked = undefined;

        if (radio[0].checked) {
            checked = 'suggestion'
        } else if (radio[1].checked) {
            checked = 'bug'
        } else {
            showAlert('danger', 'Please check out the radio button')
        }
        if (checked !== undefined) {
            if (document.getElementById('nameinput').value !== '' &&
                document.getElementById('nameinput').value !== ' ' &&
                document.getElementById('textarea').value !== '' &&
                document.getElementById('textarea').value !== ' ') {
                try {
                    db.ref(`${checked}/count`).once('value', (data) => {
                        count = data.val();
                        update(checked);
                    })
                } catch (error) {
                    showAlert('danger',error);
                }

            } else {
                showAlert('danger', 'Please fill the text-boxes')
            }
        }
    }

    const update = (type) => {
        count += 1;
        db.ref(`${type}`).update({
            count: count,
        })
        db.ref(`${type}/${type + count}`).update({
            name: document.getElementById('nameinput').value,
            [type]: document.getElementById('textarea').value,
        })
        document.getElementById('nameinput').value = '';
        document.getElementById('textarea').value = '';
        showAlert('success', 'You feedback successfully submited. We will reach out to this feedback soon!')
    }

    return (
        <div>
            <Alert alert={alert} />
            <br />
            <div className="container" >
                <h3 className='text-center'>NewsMonkey - Feedback</h3>
                <div className="mb-3">
                    <h3>Name:</h3>
                    <input type="name" style={{ width: '40%' }} className="form-control" placeholder="Enter your name" id='nameinput' required />
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" value="suggest" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <img src="https://static.thenounproject.com/png/2162450-200.png" style={{height: '20px'}} /> Suggestion
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" value='bug' id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        <i className="bi bi-bug"></i> Bug Report 
                        </label>
                    </div>
                    <br />
                    <h3>Feedback:</h3>
                    <textarea rows="8" className="form-control" placeholder='Provide your feedback here' id='textarea' required></textarea>
                    <button className="btn btn-primary my-4" type="submit" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}