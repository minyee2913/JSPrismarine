import type Player from '../../player/Player';
import type Prismarine from '../../Prismarine';
import Identifiers from '../Identifiers';
import type LevelSoundEventPacket from '../packet/LevelSoundEventPacket';

export default class LevelSoundEventHandler {
    static NetID = Identifiers.LevelSoundEventPacket;

    static handle(
        packet: LevelSoundEventPacket,
        server: Prismarine,
        player: Player
    ) {
        // TODO: broadcast to viewers
        for (let chunkPlayer of player.getPlayersInChunk()) {
            chunkPlayer.getConnection().sendDataPacket(packet);
        }
    }
}
