import React from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import issueSchema from '../data/schema'
import { useHistory } from "react-router-dom";
import { Link} from "react-router-dom";


const IssueForm = () => {

    let history = useHistory();
    
    const handleSubmit = async(values) => {
    
        alert("Form is validated! Submitting the form...")
        const newIssue = {
            Description: values.Description,
            Severity: values.Severity,
            Status: values.Status,
            CreatedDate : values.CreatedDate,
            ResolvedDate : values.ResolvedDate
        }
        
        axios.post("http://localhost:3000/issues/addIssue", newIssue)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => console.log(err));
        history.goBack();
    }

    return(
        <div className="container-xxl">
        <div className="container">
            <div className="text-center mx-auto mb-5 mt-3">
                    <h3 className="text-secondary">Add Issue</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 ">

                            <Formik
                                initialValues={{Description:"",Status:"",Severity:"",
                                                CreatedDate:"",ResolvedDate:""}}
                                validationSchema={issueSchema}    
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                {  ({errors,touched}) => (
                                    <Form>
                                        
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label text-secondary fw-bold" htmlFor="Description">Description: </label>
                                                <Field
                                                    name="Description"
                                                    type="text"
                                                    placeholder="Enter Description"
                                                    className="form-control"
                                                />
                                                {touched.Description && errors.Description && <span style={{ color: 'red' }}>{errors.Description}</span>}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label text-secondary fw-bold" htmlFor="Status">Status: </label>
                                                <Field
                                                    name="Status"
                                                    as = "select"
                                                    placeholder="Enter Status"
                                                    className="form-control"
                                                >
                                                    <option value="select">select</option>
                                                    <option value="Open">Open</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Closed">Closed</option>
                                                </Field>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label text-secondary fw-bold" htmlFor="Severity">Severity: </label>
                                                <Field
                                                    name="Severity"
                                                    as = "select"
                                                    placeholder="Enter Severity"
                                                    className="form-control"
                                                >
                                                    <option value="select">select</option>
                                                    <option value="Minor">Minor</option>
                                                    <option value="Major">Major</option>
                                                    <option value="Critical">Critical</option>
                                                </Field>
                                                </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-secondary fw-bold" htmlFor="CreatedDate">CreatedDate: </label>
                                                <Field
                                                    name="CreatedDate"
                                                    type="date"
                                                    placeholder="Select CreatedDate"
                                                    className="form-control"
                                                />
                
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-secondary fw-bold" htmlFor="ResolvedDate">ResolvedDate: </label>
                                                <Field
                                                    name="ResolvedDate"
                                                    type="date"
                                                    placeholder="Enter price"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6 text-center">
                                                <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                        type="submit">Submit</button>
                                                
                                            </div>
                                            <div className="col-md-6 text-center">
                                                <Link   className="form-control btn btn-secondary rounded-pill fw-bold"
                                                        to="/issues">
                                                Back
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
                                    
                                    )
                                }

                            </Formik>
                   
                            

                </div>
            </div>
        </div>
    </div>
    )
}

export default IssueForm;
