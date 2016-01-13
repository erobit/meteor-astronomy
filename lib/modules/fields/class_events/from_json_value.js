let classEvents = Astro.Module.modules.fields.classEvents;

classEvents.fromJSONValue = function fieldsFromJSONValue(e) {
  let doc = e.currentTarget;
  Astro.utils.fields.setAll(doc, EJSON.parse(e.json.values));
};