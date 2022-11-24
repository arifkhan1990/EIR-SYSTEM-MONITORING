import React,{useState, useEffect, useMemo} from "react";
import { NavLink, useHistory } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Table,
  Progress,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/taletalk1.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Card from "components/card/Card";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function Search(props) {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "navy.700" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [imei, setImei] = useState("");
  const [imsi, setImsi] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [searchData, setSearchData] = useState();
  const history = useHistory();
  // const { columnsData, tableData } = props;
  
  // const columns = useMemo(() => columnsData, [columnsData]);
  // const data = useMemo(() => tableData, [tableData]);

  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useGlobalFilter,
  //   useSortBy,
  //   usePagination
  // );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   page,
  //   prepareRow,
  //   initialState,
  // } = tableInstance;
  // initialState.pageSize = 5;
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  useEffect(() =>{
    if (localStorage.getItem('login-info')){
      history.push("/admin");
    }
  }, []);

    function search_query(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var search_data = JSON.stringify({'imei': imei, 'imsi': imsi, 'msisdn': msisdn});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: search_data
        };

        fetch("http://103.159.37.7:4100/api/system/status-check", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setSearchData(result[0]);
          console.log(searchData);
        })
        .catch(error => console.log('error', error));
    }
    
    return (
      <Card
        direction='row'
        w='100%'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex
            maxW={{ base: "100%", md: "max-content" }}
            mx={{ base: "auto", lg: "0px" }}
            me='auto'
            h='100%'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'>
            <Box me='auto' maxW={{ base: "100%", md: "max-content" }} w='100%'>
                <Heading color={textColor} fontSize='26px' mb='10px'>
                    Customer Query
                </Heading>
                <Text
                    mb='5px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                    Check IMEI Simulator
                </Text>
            </Box>
        </Flex>

        <Flex
            w={{ base: "100%", w: "420px"}}
            maxW='100%'
            background='transparent'
            borderRadius='15px'
            alignItems='start'
            justifyContent='center'
            flexDirection='column'
            mx={{ base: "auto", lg: "unset" }}
            me='auto'
            mt="10px"
            mb={{ base: "20px", md: "auto" }}
            >

        <FormControl             
            alignItems='center'
            algins='center'
            justify='center'>
          <Box>
            <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                IMEI
            </FormLabel>
            <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='Enter IMEI'
                mb='24px'
                fontWeight='500'
                size='lg'
                onChange={(e)=>setImei(e.target.value)}
                />
          </Box>
          <Box>
            <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                isRequired={true}
                display='flex'>
                IMSI
            </FormLabel>
            <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='Enter IMEI'
                mb='24px'
                fontWeight='500'
                size='lg'
                onChange={(e)=>setImsi(e.target.value)}
                />
          </Box>
          <Box>
            <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                isRequired={true}
                display='flex'>
                MSISDN
            </FormLabel>
            <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='Enter MSISDN'
                mb='24px'
                fontWeight='500'
                size='lg'
                onChange={(e)=>setMsisdn(e.target.value)}
                />
          </Box>
          <Box>
            <Button
                onClick={search_query}
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'>
                Search
            </Button>
          </Box>
        </FormControl>
        </Flex>

        <Flex px='25px' justify='space-between' mb='20px' align='center'>
              <Text
                color={textColor}
                fontSize='22px'
                fontWeight='700'
                lineHeight='100%'>
                Customer Query
              </Text>
              {/* <Menu /> */}
        </Flex>
        <Table variant='simple' color='gray.500' mb='5px'>
          <Thead>
              <Tr>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        SL No
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        MSISDN
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        IMEI
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        IMSI
                    </Flex>
                  </Th>
              
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        White List Status
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        White List Date
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        Black List Status
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                        Black List Date
                    </Flex>
                  </Th>
              </Tr>

          </Thead>
          <Tbody>
                <Tr>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                          1
                      </Text>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {searchData? searchData.msisdn :'-'}
                      </Text>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {searchData? searchData.imei :'-'}
                      </Text>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {searchData? searchData.imsi :'-'}
                      </Text>
                    </Th>
                    <Th>
                      <Flex align='center'>
                        { searchData && searchData.white_list_status  === "white" ?
                          <Icon
                            w='24px'
                            h='24px'
                            me='5px'
                            color="white.500"
                            as={MdCheckCircle}
                          />: null
                        }
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            {searchData ? searchData.white_list_status : ""}
                          </Text>
                      </Flex>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {searchData? searchData.white_list_date :'-'}
                      </Text>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                      <Flex align='center'>
                      {searchData && searchData.black_list_status  === "black" ?
                          <Icon
                            w='24px'
                            h='24px'
                            me='5px'
                            color="white.500"
                            as={MdCheckCircle}
                          />: null
                        }
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            {searchData ? searchData.black_list_status : ""}
                          </Text>
                      </Flex>
                      </Text>
                    </Th>
                    <Th>
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {searchData? searchData.black_list_date :'-'}
                      </Text>
                    </Th>
                </Tr>
          </Tbody>
        </Table>
      </Card>
    );
}
  