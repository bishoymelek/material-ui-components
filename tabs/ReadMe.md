# Tabs Component

## Props available:

    - options => array of objects, currently with label property only(Tab Label)
    - children => in the correct sequence, You should add content of every defined tab in the `options` array above

## working example:

```
<Tabs
    options={[
        {label: 'Participant'},
        {label: 'Guardian'},
        {label: 'Service Provider'}
    ]}
    >
    <div> Participant data </div>
    <div> Guardian data </div>
    <div> Service Provider data </div>
</Tabs>
```
