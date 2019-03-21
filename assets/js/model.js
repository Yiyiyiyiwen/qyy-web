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
        type: 'map3D',
        map: 'world',
        data: [],
        barSize: 0.1,
            minHeight: 0.2,
            silent: true,
            itemStyle: {
                color: 'orange'
                // opacity: 0.8
            }

    }]
        });
        let option = {
            backgroundColor: '#fff',
        geo3D: {
            map: 'world',
            shading: 'lambert',
            light: {
                main: {
                    intensity: 5,
                    shadow: false,
                    shadowQuality: 'high',
                    alpha: 150,
                    beta:70
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: 'data-gl/asset/canyon.hdr',
                    exposure: 10,
                    diffuseIntensity: 1
                }
            },
            groundPlane: {
                show: true,
                color: '#999'
            },
            postEffect: {
                enable: true,
                bloom: {
                    enable: false
                },
                SSAO: {
                    radius: 1,
                    intensity: 1,
                    enable: true
                },
                depthOfField: {
                    enable: false,
                    focalRange: 10,
                    blurRadius: 10,
                    fstop: 1
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            itemStyle: {
            },

            regionHeight: 2
        },
        visualMap: {
            max: 100,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            shading: 'lambert',
            data: [],
            barSize: 0.5,
            minHeight: 2,
            silent: true,
            itemStyle: {
                color: 'orange'
                // opacity: 0.8
            }
        }]
   
};  
        const rodamData = () => {
            let name = '随机点' + Math.random().toFixed(5)
            let longitude = (Math.random() * 100).toFixed(2)
            let longitude2 =(Math.random() * 80).toFixed(2)
            let latitude3 = (Math.random() * 100).toFixed(2)
            return {
               
                value: [longitude,longitude2,latitude3]
            }
        }
        for (let i = 0; i < 500; i++) {
            option.series[0].data = option.series[0].data.concat(rodamData())
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