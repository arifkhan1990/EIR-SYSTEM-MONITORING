
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
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import { VSeparator, HSeparator } from "components/separator/Separator";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PopularCard from "views/admin/default/components/PopularCard";
import PieCard from "views/admin/default/components/PieCard";
import { NavLink, useHistory } from "react-router-dom";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [dashboardSysInfo, setdashboardSysInfo] = useState([]);
  const [dashboardAppInfo, setdashboardAppInfo] = useState([]);
  const history = useHistory();
  
  useEffect(() =>{
        if (localStorage.getItem('login-info')){
          history.push("/admin/dashboard");
        }else{
          history.push('/auth/sign-in');
        }
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://103.159.37.7:4100/api/system/system-info", requestOptions)
      .then(response => response.json())
      .then(result => {
        setdashboardSysInfo(result.data);
      })
      .catch(error => console.log('error', error));
  },[]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://103.159.37.7:4100/api/system/link-status", requestOptions)
      .then(response => response.json())
      .then(result => {
        setdashboardAppInfo(result.data);
      })
      .catch(error => console.log('error', error));
  },[]);


  const rowColor = ['#6375b8', '#954391','#d17b53','#9ab863','#394a42','#64989c'];
  var i = 0;

  console.log({dashboardAppInfo});
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {dashboardSysInfo.map((data, key) => (

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 6, "2xl": 6 }}
          gap='20px'
          mb='20px'
          bg={rowColor[key]}
          >
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                }
              />
            }
            bg={rowColor[key]}
            value={data.server_info}
            // value='$350.4'
          />
          <MiniStatistics
            value={data.current_connections}
            name='Current Connection'
          />
          <MiniStatistics  value={data.cpu_uses} name='CPU Uses' />
          <MiniStatistics
            value={data.server_load}
            name='Server Load'
          />
          <MiniStatistics
            name='Ram Uses'
            value={data.ram_uses}
          />
          <MiniStatistics
            name='Up Times'
            value={data.uptime}
          />
        </SimpleGrid>

      ))}

      <HSeparator mb='20px'>
        
      </HSeparator>
      <Box
      startContent={
            <IconBox
                  flex='1'
                  w='46px'
                  h='46px'
                  icon={<Icon w='28px' h='28px' as={MdApps} color='white' />}
              />
            }
      >
            <Text
              me='auto'
              color={textColor}
              fontSize='xl'
              fontWeight='700'
              lineHeight='100%'
              mb='20px'
              >
              Application Monitoring
            </Text>
      </Box>
          

          <SimpleGrid
            columns={{ base: 1, md: 4, lg: 4, "2xl": 4 }}
            gap='20px'
            mb='20px'
            >
            {dashboardAppInfo.map((data, key) => (
              <MiniStatistics
                startContent={
                  <IconBox
                    w='56px'
                    h='56px'
                    bg={data.link_status == 1 ?'linear-gradient(90deg, #287f14 0%, #6bc35f 100%)' : 'linear-gradient(90deg, #de6a4e 0%, #741b1b 100%)'}
                    icon={<Icon w='28px' h='28px' as={data.link_status == 1? MdAddTask: MdCancel} color='white' />}
                  />
                }
                value={data.link_name}
                name={data.link_status == 1 ? 'Connected' : 'Disconnected'}
                bg={data.link_status == 1 ? '#04B45F' : '#c82d2d'}
                // value='$350.4'
              />
            ))}
          </SimpleGrid>


          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <PopularCard />
            <PieCard />
          </SimpleGrid>
    </Box>
  );
}
