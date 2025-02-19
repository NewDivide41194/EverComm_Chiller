import React from 'react'
import { ResponsiveBullet } from '@nivo/bullet'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const UtilizationChart = (props) => {
    const { data } = props
    console.log(data);

    return (
        <div style={{ height: '150px' }}>
            <ResponsiveBullet
                data={data}
                margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                spacing={36}
                titleAlign="start"
                titleOffsetX={19}
                measureSize={0}
                rangeColors='set2'
                markerSize={0}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>)

}
export default UtilizationChart