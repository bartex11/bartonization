import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavigationNavPage from './pages/NavigationNavPage';
import FormsNavPage from './pages/FormsNavPage';
import TablesNavPage from './pages/TablesNavPage';
import AddonsNavPage from './pages/AddonsNavPage';
import ModalsNavPage from './pages/ModalsNavPage';
import AdvancedNavPage from './pages/AdvancedNavPage';
import ComponentsNavPage from './pages/ComponentsNavPage';

// SITE
import HomePage from './site/HomePage';
import Story from './site/MyStory';
import Portfolio from './site/Portfolio';
import Resume from './site/Resume';
import Contact from './site/Contact';

import Askora from './projects/AskoraPage';
import Katerina from './projects/KaterinaPage';
import Chlosta from './projects/ChlostaPage';
import DeBg from './projects/De-BgPage';

// FREE
import AnimationPage from './pages/AnimationPage';
import AlertPage from './pages/AlertPage';
import HomePageOld from './pages/HomePage';
import Background from './site/Background';
import ButtonPage from './pages/ButtonPage';
import CSSPage from './pages/CSSPage';
import TablePage from './pages/TablePage';
import TableResponsivePage from './pages/TableResponsivePage';
import TableScrollPage from './pages/TableScrollPage';
import TableStylesPage from './pages/TableStylesPage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import DatatablePage from './pages/DatatablePage';
import DatatableApiPage from './pages/DatatableApiPage';
import ModalPage from './pages/ModalPage';
import ModalFormPage from './pages/ModalFormPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import PanelPage from './pages/PanelPage';
import CollapsePage from './pages/CollapsePage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';
import MasksPage from './pages/MasksPage';
import DropdownPage from './pages/DropdownPage';
import VideoCarouselPage from './pages/VideoCarouselPage';
import HoverPage from './pages/HoverPage';
import FormsPage from './pages/FormsPage';
import ChartsPage from './pages/ChartsPage';
import SearchPage from './pages/SearchPage';
import ValidationPage from './pages/ValidationPage';
import NavbarPage from './pages/NavbarPage';
import IframePage from './pages/IframePage';

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/askora" component={Askora} />
        <Route exact path="/katerina" component={Katerina} />
        <Route exact path="/chlosta" component={Chlosta} />
        <Route exact path="/de-bg" component={DeBg} />

        <Route exact path="/css" component={CSSPage} />
        <Route exact path="/components" component={ComponentsNavPage} />
        <Route exact path="/advanced" component={AdvancedNavPage} />
        <Route exact path="/navigation" component={NavigationNavPage} />
        <Route exact path="/forms" component={FormsNavPage} />
        <Route exact path="/tables" component={TablesNavPage} />
        <Route exact path="/modals" component={ModalsNavPage} />
        <Route exact path="/addons" component={AddonsNavPage} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/homeOld" component={HomePageOld} />

        {/* FREE */}
        <Route path="/css/animations" component={AnimationPage} />
        <Route exact path="/tables/table" component={TablePage} />
        <Route path="/tables/table-responsive"component={TableResponsivePage} />
        <Route path="/tables/table-scroll" component={TableScrollPage} />
        <Route path="/tables/table-styles" component={TableStylesPage} />
        <Route path="/components/badge" component={BadgePage} />
        <Route path="/navigation/breadcrumb" component={BreadcrumbPage} />
        <Route path="/navigation/navbar" component={NavbarPage} />
        <Route path="/components/media" component={MediaPage} />
        <Route path="/forms/input" component={InputPage} />
        <Route path="/components/dropdown" component={DropdownPage} />
        <Route path="/css/icons" component={FaPage} />
        <Route path="/css/jumbotron" component={JumbotronPage} />
        <Route path="/components/cards" component={CardsPage} />
        <Route path="/components/buttons" component={ButtonPage} />
        <Route path="/forms/forms" component={FormsPage} />
        <Route path="/components/progress" component={ProgressPage} />
        <Route path="/advanced/popover" component={PopoverPage} />
        <Route path="/components/pagination" component={PaginationPage} />
        <Route path="/components/list-group" component={ListGroupPage} />
        <Route path="/advanced/tooltips" component={TooltipsPage} />
        <Route path="/navigation/footer" component={FooterPage} />
        <Route path="/modals/modal" component={ModalPage} />
        <Route path="/modals/modal-form" component={ModalFormPage} />
        <Route path="/advanced/carousel" component={CarouselPage} />
        <Route path="/advanced/collapse" component={CollapsePage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/css/masks" component={MasksPage} />
        <Route path="/css/hover" component={HoverPage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/advanced/charts" component={ChartsPage} />
        <Route path="/components/panels" component={PanelPage} />
        <Route path="/components/search" component={SearchPage} />
        <Route path="/forms/validation" component={ValidationPage} />
        <Route path="/tables/datatable" component={DatatablePage} />
        <Route path="/tables/datatable-api" component={DatatableApiPage} />
        <Route path="/addons/iframe" component={IframePage} />
        <Route path="/advanced/alerts" component={AlertPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
