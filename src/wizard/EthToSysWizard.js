

import React, { Component } from 'react';
import StepZilla from "react-stepzilla";
import Step1ES from './Step1EthToSys';
import Step2ES from './Step2EthToSys';
import Step3ES from './Step3EthToSys';
import Step4ES from './Step4EthToSys';
import { withNamespaces } from 'react-i18next';
import './css/wizard.css';
import './css/i18n.css';

class EthToSysWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      savedToCloud: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }

  render() {

    const { t, i18n } = this.props;

    const steps =
    [
      {name: t("step1es"), component: <Step1ES t={t} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: t("step2es"), component: <Step2ES t={t} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: t("step3es"), component: <Step3ES t={t} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: t("step4es"), component: <Step4ES t={t} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
      
    ]

    return (
      <div className='EthToSysWizard'>
        <div className='step-progress'>
          <div className='languageButtons'>
            <button onClick={() =>  i18n.changeLanguage("en")}>🇬🇧</button>
            <button onClick={() =>  i18n.changeLanguage("de")}>🇩🇪</button>
            <button onClick={() =>  i18n.changeLanguage("es")}>🇩🇪</button>
            <button onClick={() =>  i18n.changeLanguage("fr")}>🇩🇪</button>
          </div>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={t("nextTextOnFinalActionStep")}
            nextButtonText={t("nextButtonText")}
            backButtonText={t("backButtonText")}
            startAtStep={window.sessionStorage.getItem('stepes') ? parseFloat(window.sessionStorage.getItem('stepes')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('stepes', step)}
           />
        </div>
      </div>
    )
  }
}

export default withNamespaces("translations")(EthToSysWizard);
