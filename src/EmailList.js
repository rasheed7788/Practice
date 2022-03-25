import { ArrowDropDown, ChevronLeft, ChevronRight } from '@mui/icons-material';
import RedoIcon from '@mui/icons-material/Redo';
import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
import './EmailList.css';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';

function EmailList() {
  return (
    <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>

                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>

        <div className="emailList__sections">
            <Section Icon = {InboxIcon} title="primary" color="red" selected />
            <Section Icon = {PeopleIcon} title="social" color="#1A73E8" />
            <Section Icon = {LocalOfferIcon} title="promotions" color="green" />
        </div>
    </div>
  )
}

export default EmailList