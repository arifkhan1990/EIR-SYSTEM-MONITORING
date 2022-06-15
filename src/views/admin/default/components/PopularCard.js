// Chakra imports
import { Box, Flex, Select, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
//import PopularChart from "components/charts/PopularChart";
import PopularChart from "components/charts/popularChart_2";
import { VSeparator } from "components/separator/Separator";
import React, { useEffect, useState } from "react";
import { callListChartOptions } from "variables/charts";


export default function Conversion(props) {
  const { ...rest } = props;

  const [popularCharData, setpopularCharData] = useState([]);
  let pCDL = [];
  // useEffect(() => {
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };

  //   fetch("http://103.159.37.7:4100/api/listed-count", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result.data);
  //       if(result.data){
  //         pCDL.push(result.data[0].white_listed);
  //         pCDL.push(result.data[0].black_listed);
  //         pCDL.push(result.data[0].grey_listed);
  //         setpopularCharData(pCDL);
  //       }
  //       console.log({pCDL})
  //     })
  //     .catch(error => console.log('error', error));
  // },[]);

  useEffect(() => {

    const fetchData = async =>{

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://103.159.37.7:4100/api/listed-count", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.data);
          if(result.data){
            pCDL.push(result.data[0].white_listed);
            pCDL.push(result.data[0].black_listed);
            pCDL.push(result.data[0].grey_listed);
            setpopularCharData(pCDL);
          }
          console.log({pCDL})
        })
        .catch(error => console.log('error', error));
    };
    fetchData();
  },[])

  //console.log({popularCharData});
  // //callListChartData = popularCharData;
  // console.log({callListChartData});
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>

        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Call List Type
        </Text>

        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>

 
      <PopularChart
        h='100%'
        w='100%'
        chartData={popularCharData.length>0? popularCharData : [90, 22,19]}
        chartOptions={callListChartOptions}
      />


      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#e6ffe6' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              White List
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {popularCharData.length>0?popularCharData[0]: 90}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#000000' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Black List
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {popularCharData.length>0?popularCharData[1]: 40}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#666666' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Gray List
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {popularCharData.length>0?popularCharData[2]: 20}
          </Text>
        </Flex>
      </Card>

    </Card>
  );
}