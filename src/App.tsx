import { Grid, GridItem, Show } from '@chakra-ui/react';
// import './App.css';

function App() {
  return (
    <>
      {/* <Grid templateAreas={`"nav nav" "aside main"`}> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="gold">
          NAV
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="purple">
            ASIDE
          </GridItem>
        </Show>

        <GridItem area="main" bg="pink.400">
          MAIN
        </GridItem>
      </Grid>
    </>
  );
}

export default App;