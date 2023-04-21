/**
  * Onload event
  * @event DOMContentLoaded
  * @fires MapConstructor#generateMap
  */
 /*
  window.addEventListener('DOMContentLoaded', (event) => {
    const historyMap = new MapConstructor('#map', '80vh')
      .generateMap()
      .locateOnClick();
  });*/

    /**
    * Onload event
    * @event DOMContentLoaded
    * @summary fires layer dialogue constructor
    * @fires Layer#generateAddLayerForm
    */

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('.mapControls');
  const layerControls = new LayerManager();
  layerControls.generateAddLayerForm(parent);
  layerControls.generateAddMapForm(parent);
  parent.querySelector('#target_map').value = 'afterMap';
  parent.querySelector('#name').value = 'testing testing';
  parent.querySelector('#id').value = 'c7_dates-ajsksu-right-TEST';
  parent.querySelector('#source_layer').value = 'c7_dates-ajsksu';
  parent.querySelector('#database').value = 'mapbox://nittyjee.8krf945a';
  parent.querySelector('#group').value = '1643-75|Demo Taxlot: C7 TEST';
  parent.querySelector('#color').value = 'blue';
  parent.querySelector('#opacity').value = '0.7';
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('toggleFeatureVisibility')) {
    const hiddenContent = e.target.parentElement.querySelector('.hiddenContent');
    const plusMinus = e.target.parentElement.querySelector('i');
    if (hiddenContent.classList.contains('displayContent')) {
      plusMinus.classList.remove('fa-plus-square');
      plusMinus.classList.add('fa-minus-square');
      hiddenContent.classList.remove('displayContent');
      return;
    }
    hiddenContent.classList.add('displayContent');
    plusMinus.classList.add('fa-plus-square');
    plusMinus.classList.remove('fa-minus-square');
  }
});
