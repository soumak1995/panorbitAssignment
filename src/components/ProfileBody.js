import React,{useEffect} from 'react'
import '../css/ProfileBody.css';
import UserInfo from '../components/UserInfo'
import Address from '../components/Address'
import {useParams} from 'react-router-dom'
import {selectedData} from '../Redux/ActionCreators'
import{connect} from 'react-redux'
  const mapDispatchToProps = dispatch => ({
    addSelectedData: (user) =>  dispatch(selectedData(user))
    
  });
  const mapStateToProps = state => {
    return {
      selectedData:state.selectedData
    }
  }
function ProfileBody({users,addSelectedData,selectedData}) {
    const {id}=useParams();
   const user= users?.filter((person) => person.id === parseInt(id,10))[0]
    useEffect(() => {
        addSelectedData(user)
    }, [])
    return (
        <div className="ProfileBody">
            <UserInfo user={selectedData}/>
            <Address user={selectedData}/>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileBody);

