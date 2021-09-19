import './GridExport.css';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons'
import { Checkbox } from '@progress/kendo-react-inputs';
import { gridSampleProducts } from './grid-sample-products.jsx';
import { process } from '@progress/kendo-data-query';

function GridExport() {

  const [data, setData] = useState();
  const [take, setTake] = useState(5);
  const [skip, setSkip] = useState(0);
  const [allPageCheck, setAllPageCheck] = useState(false);
  const [isPdfExporting, setIsPdfExporting] = useState(false);
  const pdfExportRef = useRef(null);

  const dataState = {
    take,
    skip
  }

  // Take our JSON data and transform it to a format that easily binds to the Grid, using our skip and take variables
  const processedData = process(gridSampleProducts, dataState);
//Calling the Function for retrieve data
  useEffect(
    () => {
      if(!processedData.data.length) {
        setSkip(0);
      }
      setData(gridSampleProducts);
    },
    [processedData, data]
  );

  const allPageChange = (event) => {
    setAllPageCheck(!allPageCheck);
  };

  const onPdfExportDone = useCallback(
    () => {
      setIsPdfExporting(false);
    },
    []
  );

  const onPdfExport = useCallback(
    () => {
      if(pdfExportRef.current) {
        setIsPdfExporting(true);
        if(allPageCheck) {
          pdfExportRef.current.save(data, onPdfExportDone);
        }
        else {
          pdfExportRef.current.save(processedData.data, onPdfExportDone);
        }        
      }
    },
    [processedData, onPdfExportDone]
  );

  /* This triggers whenever data changes in the Grid (sorting, paging, filtering, grouping)
     We just use sorting in this case, but when we have more operations this will be our go-to event
  */
  const onDataStateChange = useCallback(
    (event) => {
      setTake(event.dataState.take);
      setSkip(event.dataState.skip);
    },
    [setTake, setSkip]
  );

  const GridElement = (
    <Grid
      data={processedData}
      rowHeight={40}
      pageable
      {...dataState}
      onDataStateChange={onDataStateChange}
    >
      <GridToolbar>
        <Button
          icon="pdf"
          onClick={onPdfExport}
          disabled={isPdfExporting}
        >
        </Button>
      </GridToolbar>
      <Column field="JobID" title="ID" />
      <Column field="CustomerName" title="Name" />
      <Column field="Category.CategoryName" title="Job Category" />
      <Column field="JobPrice" title="Price" />
      <Column field="UnitsOnOrder" title="UnitOrder" />
      <Column field="Duration" title="Duration (Days)" />
      <Column field="Status" title="Status of Job" />

    </Grid>
  );

  return (
    <>
      <div className="grid-export-area">
        <h1><center>Job Progression Sheet</center></h1>
        <Checkbox
          onChange={allPageChange}
          checked={allPageCheck}
          label={'Export All Pages'}
        />
      </div>
      {GridElement}
      <GridPDFExport ref={pdfExportRef}>
        {GridElement}
      </GridPDFExport>
    </>
  );
}

export default GridExport;