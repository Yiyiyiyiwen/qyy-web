<script>
    window.onload = () => {
        let EC = echarts.init(document.querySelector('.EC'))
        let canvas = document.createElement('canvas');
        // 地球皮肤
        let mapChart = echarts.init(canvas, null, {
            width: 4096,
            height: 2048
        });
        mapChart.setOption({
            series: [{
                type: 'map',
                map: 'world',
                // 绘制完整尺寸的 echarts 实例
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boundingCoords: [
                    [-180, 90],
                    [180, -90]
                ]
            }]
        });
        let option = {
            
            backgroundColor: '	#DCDCDC	',
            tooltip: {
                show: false
            },
            
            globe: {
                environment: '#333',
                baseTexture: mapChart,
                light: { // 光照阴影
                    main: {
                        intensity: 0, // 光照强度
                        shadow: false, // 是否显示阴影
                        alpha: 40,
                        beta: -30
                    },
                    ambient: {
                        intensity: 0.5
                    }
                },
                viewControl: {
                    alpha: 30,
                    beta: 160,
                    autoRotate: true,
                    autoRotateAfterStill: 10,
                    distance: 240
                }
            },
            series: [{
                name: 'lines3D',
                type: 'lines3D',
                zlevel: 2,
                coordinateSystem: 'globe',
                effect: {
                    show: false
                },
                blendMode: 'lighter',
                lineStyle: {
                    width: 2
                },
                data: [],
                silent: false
            },
            {
                name: '地域详情',
                type: 'map',
                map: '',
                zlevel: 1,
                zoom: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                data: []
            }]
        }
    
        EC.setOption(option)
        let innerOption = {
            series: [{
                type: 'map',
                map: '',
                zoom: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                data: []
            }]
        }
      
     
    }
</script>