import React from "react";

function Form(props) {
    return (
    <div>
        <form>
            <div className="form-group row">
                <label for="inputSearch" class="col-sm-2 col-form-label"></label>
                <div className="col-sm-4">
                    <input 
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="search for an employee"
                        id="search"
                     />
                     <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Form;
