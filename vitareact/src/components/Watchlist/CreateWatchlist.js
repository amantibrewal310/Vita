import React, {useState} from 'react'
import axiosInstance from '../../axios'
import formStyle from '../css/forms.module.css'

function CreateWatchlist({setShowCreateNewOption, refreshOptions}) {

    const [name, setName] = useState('')

    const handleCreateNew = () => {
        if(name.length  > 0)  {

            const body = {name: name}
            let res = axiosInstance.post(`video/watchlist/`, body)
            console.log(res)
            console.log('playlist created')
            refreshOptions()
            setTimeout(() => setShowCreateNewOption(false), 500)
        }
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Name your playlist"
                onChange={(e) => setName(e.target.value)}
                className={formStyle.videoInput}
                style={{borderColor: 'white'}}
            />
            <div className={formStyle.buttonBox}>
                <button 
                    onClick={handleCreateNew}
                    className={formStyle.smallSubmitBtn}
                > Create </button>
                <button 
                    onClick={() => setShowCreateNewOption(false)}
                    className={formStyle.smallDangerBtn}
                > Cancel </button>
            </div>
        </div>
    )
}

export default CreateWatchlist
