import React,{Fragment} from 'react';
import { Text, View ,ScrollView} from 'react-native';
import { CardHeaderText } from '../chatView/UserProfile';
import { labels } from '../../utils/labels';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../../utils/colors';
import { H14font400Gray4, H14purpleVar3Text, H14redText, H15font500Black } from '../../components/commonText';
import { manageDevicesdata } from '../../utils/data/manageDeviceData';
import { MainContainer, RowSpaceBetween } from '../../components/commonView';
import { mt10, mt15, mv10, mv5 } from '../../components/commonStyles';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { DevHeight } from '../../utils/device';


interface CardHeaderTextProps {
    text: string;
}

export const CardHeaderText1: React.FC<CardHeaderTextProps> = ({ text }) => {
    return (
        <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
            <View style={{
                backgroundColor: colors.redVar1,
                borderRadius: 8,
                padding: 10
            }}>
                <H14redText style={{ marginHorizontal: 10 }}>
                    {text}
                </H14redText>
            </View>
        </View >
    );
    
};

export  const cardDetails =()=>{
    return(
        <View >
        {manageDevicesdata.map((item) => {
            return (
                <View key={item.id}>
                    <View style = {{backgroundColor:colors.white,borderRadius:10,
                    padding:15,margin:15,borderWidth:2,borderColor:colors.greyVar0
                    }} >
                      <View>
                      <RowSpaceBetween style={[mv5]}>
                       <H15font500Black>{item.date}</H15font500Black>
                        <H14font400Gray4>{item.dateAndtime}</H14font400Gray4>
                       </RowSpaceBetween>
                       <RowSpaceBetween style={[mv5]}>
                       <H15font500Black>{item.device}</H15font500Black>
                        <H14font400Gray4>{item.deviceName}</H14font400Gray4>
                       </RowSpaceBetween>
                       <RowSpaceBetween style={[mv5]}>
                       <H15font500Black>{item.ipAdd}</H15font500Black>
                        <H14font400Gray4>{item.ipId}</H14font400Gray4>
                       </RowSpaceBetween>
                       <RowSpaceBetween style={[mv5]}>
                       <H15font500Black>{item.location}</H15font500Black>
                        <H14font400Gray4>{item.devLoc}</H14font400Gray4>
                       </RowSpaceBetween>
                       <RowSpaceBetween style={[mv5]}>
                       <H15font500Black style={[mt10]}>{item.status}</H15font500Black>
    <CardHeaderText1 text={labels.Delete} />

                       </RowSpaceBetween>
                       
                        
</View>
                        </View>

                    </View>

            )
        })
        }
    </View>

    )
}

export type manageDevicesProps = {
    
    }


const ManageDevices = (props: manageDevicesProps) => {
    return (
     <Fragment>
        <MainContainer>
        <SearchHeader headerText={labels.manageDev} height={DevHeight / 12} />

          <ScrollView>
          {cardDetails()}
           {cardDetails()}
           {cardDetails()}
          </ScrollView>
        </MainContainer>
     </Fragment>
    )
}

export default ManageDevices