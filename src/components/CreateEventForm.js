import React from 'react'

const CreateEventForm = () => {
    
    let [event, setEvent] = React.useState('');
    let [title, setTitle] = React.useState('');
    let [category, setCategory] = React.useState('');
    let [summary, setSummary] = React.useState('');
    let [timeZone, setTimezone] = React.useState('');
    let [startTime, setStartTime] = React.useState('');
    let [startDate, setStartDate] = React.useState('');
    let [endTime, setEndTime] = React.useState('');
    let [endDate, setEndDate] = React.useState('');
    let [description, setDescription] = React.useState('');
    let [showValidationError, setShowValidationError] = React.useState(false);

    const handleCreateEvent = () => {
        let isValid = validation();
        if(isValid === true) alert("Event created succusefully !!!")
        else setShowValidationError(true);
        console.log(showValidationError)
    } 

    const validation = () => {
        if(event==="") return false;
        else if(title==="") return false;
        else if(category==="") return false;
        else if(summary==="") return false;
        else if(timeZone==="") return false;
        else if(startTime==="") return false;
        else if(startDate==="") return false;
        else if(endTime==="") return false;
        else if(endDate==="") return false;
        else if(description==="") return false;
        else return true;
    }

    const validationError = <label style={{color: "red", fontSize: "10px"}}>Please fill mandatory Fields</label>;

    // console.log(event,title,category,summary,timeZone,startDate,startTime,endDate,endTime,description)
    console.log(showValidationError)
    return (
        
        <div>
                <div style={{display: "flex"}}>
                    <div style={{color: "blueviolet", fontWeight: "bold"}} className="p-1">Create Event</div>
                    <div style={{marginLeft: "auto"}} className="p-1"><button onClick={()=>handleCreateEvent()} style={{backgroundColor: "blueviolet", color: "white", borderRadius:"5px"}}>Create</button></div>
                    <div className="p-1"><button style={{borderRadius:"5px"}}>Cancel</button></div>
                    <div><hr /></div>
                </div>
                <div className="container">
                    <form style={{width: "500px", margin: "auto", marginTop: "50px"}} className="text-muted">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{fontSize: "10px"}}>Add Event in *</label>
                            <select onChange={(e) => setEvent(e.target.value)} style={{borderColor: "white", borderBottom: "1px solid gray"}} class="form-control" id="exampleFormControlSelect1">
                              <option></option>
                              <option>Event 1</option>
                              <option>Event 2</option>
                              <option>Event 3</option>
                              <option>Event 4</option>
                              <option>Event 5</option>
                            </select>
                            {!event && showValidationError ? validationError : null}
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2" style={{fontSize: "10px"}}>Title *</label>
                            <div>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" style={{width: "500px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray"}} id="exampleFormControlSelect2" />
                                <div style={{display: "flex", flexDirection: "row-reverse", fontSize: "10px"}}>(0/250)</div>
                            {!title && showValidationError ? validationError : null}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect3" style={{fontSize: "10px"}}>Categories *</label>
                            <select onChange={(e)=>setCategory(e.target.value)} style={{borderColor: "white", borderBottom: "1px solid gray", fontSize: "10px"}} class="form-control" id="exampleFormControlSelect3">
                              <option>Select...</option>
                              <option>category 1</option>
                              <option>category 2</option>
                              <option>category 3</option>
                              <option>category 4</option>
                              <option>category 5</option>
                            </select>
                            {!category && showValidationError ? validationError : null}
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect4" style={{fontSize: "10px"}}>Short Summary *</label>
                            <div>
                                <input onChange={(e)=>setSummary(e.target.value)} type="text" style={{width: "500px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray"}} id="exampleFormControlSelect4" />
                                <div style={{display: "flex", flexDirection: "row-reverse", fontSize: "10px"}}>(0/500)</div>
                            {!summary && showValidationError ? validationError : null}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect5" style={{fontSize: "10px", color: "black"}}>Type:  Public</label>
                            <div>
                                <input type="text" placeholder="Registration Site" style={{width: "500px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect5" />
                                <div style={{display: "flex", flexDirection: "row-reverse", fontSize: "10px"}}>(0/1024)</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div style={{width: "600px"}}>
                                <div class="custom-control custom-switch">
                                  <label style={{marginLeft: "-38px", marginRight: "50px"}}>Is this a virtual event?</label>
                                  <input type="checkbox" class="custom-control-input" id="customSwitch1" checked/>
                                  <label class="custom-control-label" for="customSwitch1">Yes</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div>
                                <input type="text" placeholder="Online Link" style={{width: "500px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect6" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect7" style={{fontSize: "10px"}}>Select Timezone *</label>
                            <div>
                                <input onChange={(e)=>setTimezone(e.target.value)} type="text" style={{width: "350px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect7" />
                                <span style={{fontSize: "10px", color: "black"}}> GMT +05:30 <i class="fas fa-question-circle"></i></span>
                                {!timeZone && showValidationError ? validationError : null}
                            </div>
                        </div>
                        <div class="form-group d-flex">
                            <div>
                                <label for="exampleFormControlSelect8" style={{fontSize: "10px"}}>Start Date *</label>
                                <div>
                                    <input onChange={(e)=>setStartDate(e.target.value)} type="date" style={{width: "100px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect8" />
                                    {!startDate && showValidationError ? validationError : null}
                                </div>
                            </div>
                            <div className="ml-5">
                                <label for="exampleFormControlSelect9" style={{fontSize: "10px"}}>Start Time *</label>
                                <div>
                                    <input onChange={(e)=>setStartTime(e.target.value)} type="time" style={{width: "100px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect9" />
                                    {!startTime && showValidationError ? validationError : null}
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex">
                            <div>
                                <label for="exampleFormControlSelect10" style={{fontSize: "10px"}}>End Date *</label>
                                <div>
                                    <input onChange={(e)=>setEndDate(e.target.value)} type="date" style={{width: "100px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect10" />
                                    {!endDate && showValidationError ? validationError : null}
                                </div>
                            </div>
                            <div className="ml-5">
                                <label for="exampleFormControlSelect11" style={{fontSize: "10px"}}>End Time *</label>
                                <div>
                                    <input onChange={(e)=>setEndTime(e.target.value)} type="time" style={{width: "100px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px"}} id="exampleFormControlSelect11" />
                                    {!endTime && showValidationError ? validationError : null}                                
                                </div>
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <textarea onChange={(e)=>setDescription(e.target.value)} class="form-control" id="validationTextarea" placeholder="Description (max limit 8000 characters) *" style={{fontSize: "10px", height: "150px"}}></textarea>
                            <div style={{display: "flex", flexDirection: "row-reverse", fontSize: "10px"}}>(0/8000)</div>
                            {!description && showValidationError ? validationError : null}
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect5" style={{fontSize: "10px"}}>Attachments <i class="fas fa-question-circle"></i></label>
                            <div style={{border: "2px dashed gray"}}>
                                <input type="file" placeholder="Registration Site" style={{width: "500px", height: "50px", borderTop: "white", borderLeft: "white", borderRight: "white", borderBottom: "1px solid gray", fontSize: "10px", textAlign: "center", marginTop: "40px"}} id="exampleFormControlSelect5" />
                            </div>
                        </div>
                        <div class="mt-5" style={{fontSize: "10px", textAlign: "center"}}>Use option on the top right section of the screen to save your changes</div>
                    </form>
                </div>            
        </div>
    )
}

export default CreateEventForm;