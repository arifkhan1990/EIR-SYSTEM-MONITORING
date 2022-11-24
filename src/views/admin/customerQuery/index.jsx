
// Chakra imports
import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
    Text,
  } from "@chakra-ui/react";
  // Assets
  import Usa from "assets/img/dashboards/usa.png";
  import Coffee from "assets/img/dashboards/coffee.png";
  import Starbucks from "assets/img/dashboards/starbucks.png";
  import Avatar1 from "assets/img/avatars/avatar1.png";
  import Avatar2 from "assets/img/avatars/avatar2.png";
  import Avatar3 from "assets/img/avatars/avatar3.png";
  import Avatar4 from "assets/img/avatars/avatar4.png";
  // Custom components
  import MiniStatistics from "components/card/MiniStatistics";
  import IconBox from "components/icons/IconBox";
  import React, {useEffect, useState} from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
    MdCancel,
    MdApps,
  } from "react-icons/md";
  
  import {
    columnsDataCheck,
    columnsDataComplex,
  } from "views/admin/default/variables/columnsData";
  import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
  import { VSeparator, HSeparator } from "components/separator/Separator";
  import DailyTraffic from "views/admin/default/components/DailyTraffic";
  import PopularCard from "views/admin/default/components/PopularCard";
  import PieCard from "views/admin/default/components/PieCard";
  import { NavLink, useHistory } from "react-router-dom";
  import tableDataComplex from "views/admin/customerQuery/variables/tableDataComplex.json";
  import ComplexTable from "views/admin/customerQuery/components/ComplexTable";
  import SearchQuery from "views/admin/customerQuery/components/Search";
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [dashboardSysInfo, setdashboardSysInfo] = useState([]);
    const [dashboardAppInfo, setdashboardAppInfo] = useState([]);
    const history = useHistory();
    
    useEffect(() =>{
      console.log('hi');
      if (localStorage.getItem('login-info')){
        history.push("/admin/customer-query");
      }else{
        history.push('/auth/sign-in');
      }
    }, []);

  
    const rowColor = ['#6375b8', '#954391','#d17b53','#9ab863','#394a42','#64989c'];
    var i = 0;
  
    console.log({dashboardAppInfo});
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <SearchQuery/>
      </SimpleGrid>
      {/* <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid> */}
      </Box>
    );
  }
  