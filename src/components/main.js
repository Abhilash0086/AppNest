import React, { useState } from 'react'
import reactLogo from '../assets/logo.svg';
import icon from '../assets/icon.svg'
import { Box, Heading, Text, Button , Flex, Input} from "@sparrowengg/twigs-react";

const Main = (props) => {
  const [name, setName] = useState('')

  const [apiKey, setApiKey] = useState('');
  const [sourceApiKey, setSourceApiKey] = useState('');
  const [destinationFolder, setDestinationFolder] = useState('');
  const [selectedSurveys, setSelectedSurveys] = useState([]);
  const [mapping, setMapping] = useState([]);

  // Handle API Key Input
  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  // Handle Source API Key Input
  const handleSourceApiKeyChange = (e) => {
    setSourceApiKey(e.target.value);
  };

  // Handle Destination Folder Input
  const handleDestinationFolderChange = (e) => {
    setDestinationFolder(e.target.value);
  };

  // Handle Survey Selection
  const handleSurveySelection = (surveyId) => {
    if (selectedSurveys.includes(surveyId)) {
      setSelectedSurveys(selectedSurveys.filter((id) => id !== surveyId));
    } else {
      setSelectedSurveys([...selectedSurveys, surveyId]);
    }
  };

  // Handle Mapping
  const handleMappingChange = (sourceQuestion, sparroQuestion) => {
    // Update mapping in state
    // Example: { source: "Source Q1", sparro: "SurveySparrow Q1" }
  };

  // Handle Start Migration
  const handleStartMigration = () => {
    // Perform migration logic based on user selections and mapping
  };

  return (
    <Box>
      <div className='ml-10 mt-10 bg-stone-100 p-5 rounded-lg'>
      {/* Integration Settings Section */}
      <section>
        <Heading size="h2">Integration Settings</Heading><br></br>
        <Flex flexDirection="column" gap={10}>
          <Box>
            <Text className='mb-2'>SurveySparrow API Key:</Text>
            <Input type="text" value={apiKey} onChange={handleApiKeyChange} />
          </Box>
          <Box>
            <Text className='mb-2'>Source Platform API Key:</Text>
            <Input type="text" value={sourceApiKey} onChange={handleSourceApiKeyChange} />
          </Box>
          <Box>
            <Text>Integration Status: <span>Connected</span></Text>
          </Box>
        </Flex>
      </section>
      <br></br>

      {/* Automatic Mapping Section */}
      <section>
        <Heading size="h2">Automatic Mapping</Heading>
        <Button onClick={() => {}} className='mt-4'>Automatic Mapping</Button>
        <Flex flexDirection="column" gap={5}>
          <Box>
            {/* <Heading size="h3" className='mt-3'>Edit Mapping</Heading> */}
            {/* Mapping Table or Interface */}
            {/* Source Question | SurveySparrow Question */}
            {/* Example: Source Q1 | SurveySparrow Q1 (Dropdown) */}
          </Box>
        </Flex>
      </section>

      {/* Migration Options Section */}
      <section>
        <Heading size="h2" className='mt-3'>Migration Options</Heading>
        <Flex flexDirection="column">
          <Box>
            <Text>Select Surveys to Migrate:</Text>
            {/* Checkbox list or multi-select */}
          </Box>
          <Box>
            <Text className='mt-4 mb-2'>Destination Folder/Category:</Text>
            <Input className="mb-4" type="text" value={destinationFolder} onChange={handleDestinationFolderChange} />
          </Box>
        </Flex>
        <Button onClick={handleStartMigration}>Start Migration</Button>
      </section>

      {/* Progress and Notifications Section */}
    

      {/* Survey Mapping Section (if not covered under Automatic Mapping) */}
      <section>
        <Heading size="h2">Survey Mapping</Heading>
       
        <Button onClick={() => {}}>Save Mapping</Button>
      </section>

      {/* Additional UI Elements */}
      <section>
        <Heading size="h2" className='my-5'>Additional UI Elements</Heading>
        <Flex flexDirection="row" gap={8}>
        <Button onClick={() => {}}>Connect</Button>
        <Button onClick={() => {}}>Disconnect</Button>
        </Flex>
        {/* Connect/Disconnect Buttons */}
        {/* Information and Help */}
        {/* User Profile/Settings (if applicable) */}
      </section>
      </div>
    </Box>
  )
}

export default Main
