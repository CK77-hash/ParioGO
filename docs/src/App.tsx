import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { GetStarted } from './pages/GetStarted';
import { Foundations } from './pages/Foundations';
import { Components } from './pages/Components';
import { Examples } from './pages/Examples';
import { ButtonDocs } from './pages/components/ButtonDocs';
import { InputDocs } from './pages/components/InputDocs';
import { CardDocs } from './pages/components/CardDocs';
import { AccordionDocs } from './pages/components/AccordionDocs';
import { BreadcrumbsDocs } from './pages/components/BreadcrumbsDocs';
import { CheckboxDocs } from './pages/components/CheckboxDocs';
import { DatePickerDocs } from './pages/components/DatePickerDocs';
import { DataTableDocs } from './pages/components/DataTableDocs';
import { DropdownDocs } from './pages/components/DropdownDocs';
import { LinkDocs } from './pages/components/LinkDocs';
import { PaginationDocs } from './pages/components/PaginationDocs';
import { RadioButtonDocs } from './pages/components/RadioButtonDocs';
import { TabsDocs } from './pages/components/TabsDocs';
import { TooltipsDocs } from './pages/components/TooltipsDocs';
import { ProgressBarDocs } from './pages/components/ProgressBarDocs';
import { SearchDocs } from './pages/components/SearchDocs';
import { ColorsDocs } from './pages/foundations/ColorsDocs';
import { IconsDocs } from './pages/foundations/IconsDocs';
import { TypographyDocs } from './pages/foundations/TypographyDocs';
import { SpacingDocs } from './pages/foundations/SpacingDocs';
import { ThemesDocs } from './pages/foundations/ThemesDocs';
import { ElevationDocs } from './pages/foundations/ElevationDocs';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/foundations/colors" element={<ColorsDocs />} />
            <Route path="/foundations/icons" element={<IconsDocs />} />
            <Route path="/foundations/typography" element={<TypographyDocs />} />
            <Route path="/foundations/spacing" element={<SpacingDocs />} />
            <Route path="/foundations/themes" element={<ThemesDocs />} />
            <Route path="/foundations/elevation" element={<ElevationDocs />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/button" element={<ButtonDocs />} />
            <Route path="/components/input" element={<InputDocs />} />
            <Route path="/components/card" element={<CardDocs />} />
            <Route path="/components/accordion" element={<AccordionDocs />} />
            <Route path="/components/breadcrumbs" element={<BreadcrumbsDocs />} />
            <Route path="/components/checkbox" element={<CheckboxDocs />} />
            <Route path="/components/date-picker" element={<DatePickerDocs />} />
            <Route path="/components/data-table" element={<DataTableDocs />} />
            <Route path="/components/dropdown" element={<DropdownDocs />} />
            <Route path="/components/link" element={<LinkDocs />} />
            <Route path="/components/pagination" element={<PaginationDocs />} />
            <Route path="/components/radio-button" element={<RadioButtonDocs />} />
            <Route path="/components/tabs" element={<TabsDocs />} />
            <Route path="/components/tooltips" element={<TooltipsDocs />} />
            <Route path="/components/progress-bar" element={<ProgressBarDocs />} />
            <Route path="/components/search" element={<SearchDocs />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
