// @flow
import React, { Component } from 'react'
import { TiPlus } from 'react-icons/lib/ti'
import ChannelModal from './components/ChannelModal'
import ChannelForm from './components/ChannelForm'
import Channel from './components/Channel'
import styles from './Channels.scss'

class Channels extends Component {
  render() {
    const {
        channelsLoading,
        channels,
        modalChannel,
        setChannel,
        channelModalOpen,
        form,
        setForm
    } = this.props
    return (
        <div className={styles.channels}>
            <ChannelModal isOpen={channelModalOpen} resetChannel={setChannel} channel={modalChannel} />
            <ChannelForm form={form} setForm={setForm} />
            <div className={styles.header}>
                <h3>Channels</h3>
                <div
                    className={`${styles.openChannel} hint--top`}
                    data-hint='Open a new channel'
                    onClick={() => setForm(true)}
                >
                    <TiPlus />  
                </div>
            </div>
            <ul>
                {
                    !channelsLoading && channels.length ? 
                        channels.map(channel => 
                            <Channel
                                key={channel.chan_id}
                                channel={channel}
                                setChannel={setChannel} 
                            />
                        )
                    :
                        'Loading...'
                }
            </ul>
        </div>
    )
  }
}


export default Channels