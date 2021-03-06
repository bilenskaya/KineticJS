Test.Modules.SPLINE = {
    'add splines': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var line1 = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 109
            }],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        var line2 = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }],
            stroke: 'red',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        var line3 = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }],
            stroke: 'green',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        layer.add(line1);
        layer.add(line2);
        layer.add(line3);
        stage.add(layer);

        test(line1.getClassName() === 'Spline', 'getClassName should be Spline');


    },
    'update spline points': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var spline = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 109
            }],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });


        layer.add(spline);
        stage.add(layer);

        test(spline.allPoints.length === 6, 'spline all points should have 6 points');

        spline.setPoints([{
            x: 73,
            y: 160
        }, {
            x: 340,
            y: 23
        }, {
            x: 500,
            y: 109
        }]);

        test(spline.allPoints.length === 3, 'spline all points should have 3 points');

        layer.draw();


    },
    'add point to spline points': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var spline = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 109
            }],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });


        layer.add(spline);
        stage.add(layer);

        test(spline.getPoints().length === 4, 'spline should have 4 points');

        spline.addPoint({
            x: 300,
            y: 200
        });

        test(spline.getPoints().length === 5, 'spline should have 5 points');

        layer.draw();
    },
    'create from points represented as a flat array': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var line = new Kinetic.Spline({
            points: [
                73, 160,
                340, 23,
                500, 109,
                300, 109
            ],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        layer.add(line);
        stage.add(layer);

        test(line.getPoints().length === 4, 'line should have 4 points');
    },
    'create from points represented as an array of objects': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var line = new Kinetic.Spline({
            points: [{
                x: 73,
                y: 160
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 109
            }],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        layer.add(line);
        stage.add(layer);

        test(line.getPoints().length === 4, 'line should have 4 points');
    },
    'create from points represented as an array of arrays': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var line = new Kinetic.Spline({
            points: [
                [73, 160],
                [340, 23],
                [500, 109],
                [300, 109]
            ],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
            tension: 1
        });

        layer.add(line);
        stage.add(layer);

        test(line.getPoints().length === 4, 'line should have 4 points');
    }
};
