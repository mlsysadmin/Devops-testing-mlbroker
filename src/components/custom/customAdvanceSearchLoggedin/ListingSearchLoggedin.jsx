import React from "react";
import { useState } from "react";
import { LineHeightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
import "../../../styles/customLoggedin.css";
import CustomAdvanceSearchLoggedin from "./AdvanceSearchLoggedin";
import CustomAdvanceSearch from "../customsearch/custom.advancesearch";
import { yellow } from "@mui/material/colors";
import { height } from "@mui/system";
import CheckboxGroup from "./AdvanceSearchLoggedin";

const ListingSearchLoggedin = () => {
    const { Option } = Select;
    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
    const [isAdvancedSearchOpenLoggedin, setAdvancedSearchOpenLoggedin] = useState(false);

    const handleAdvancedSearchClick = () => {
        setIsAdvancedSearchOpen(!isAdvancedSearchOpen);
    };
    const handleAdvancedSearchCertainClick = () => {
        setAdvancedSearchOpenLoggedin(!isAdvancedSearchOpenLoggedin);
    };
    const handleAdvanceSearchDashboard = () =>{
        setIsAdvancedSearchOpen(!isAdvancedSearchOpen);
        setAdvancedSearchOpenLoggedin(!isAdvancedSearchOpenLoggedin);
    }
    return (
        <div className="dashboard-customs" style={{backgroundColor:"yellow", height:"auto"}} >
            <div className="dashboard-custom-search" onClick={handleAdvanceSearchDashboard}>
                 {isAdvancedSearchOpenLoggedin && (
                    <CheckboxGroup/>
                )}
            </div>
            </div>
            
    );

}
export default ListingSearchLoggedin