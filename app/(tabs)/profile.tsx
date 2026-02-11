import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// Dummy profile data
const myProfile = {
  name: 'Jeremy Joseph Pohar',
  nim: '000000090148',
  phone: '+62-812-3456-7890',
  email: 'jeremy.joseph@student.umn.ac.id',
  major: 'S1 Informatika',
  university: 'Universitas Multimedia Nusantara',
};

// Dummy friends data
const friendsData = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    nim: '000000031421',
    role: 'Frontend Developer',
    phone: '+62-812-1234-5678',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    nim: '000000042156',
    role: 'UI/UX Designer',
    phone: '+62-812-2345-6789',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    nim: '000000055789',
    role: 'Backend Developer',
    phone: '+62-812-3456-7890',
  },
  {
    id: 4,
    name: 'Rina Wijaya',
    nim: '000000061234',
    role: 'QA Engineer',
    phone: '+62-812-4567-8901',
  },
  {
    id: 5,
    name: 'Doni Hermawan',
    nim: '000000072567',
    role: 'Data Analyst',
    phone: '+62-812-5678-9012',
  },
  {
    id: 6,
    name: 'Citra Dewi',
    nim: '000000083890',
    role: 'Mobile Developer',
    phone: '+62-812-6789-0123',
  },
];

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
        {/* Profile Header */}
        <ThemedView style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=JJP',
              }}
              style={styles.profileImage}
              contentFit="cover"
            />
          </View>
          <ThemedText type="title" style={styles.profileName}>
            {myProfile.name}
          </ThemedText>
          <ThemedText type="default" style={styles.nim}>
            NIM: {myProfile.nim}
          </ThemedText>
        </ThemedView>

        {/* Profile Details */}
        <ThemedView style={styles.detailsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Informasi Pribadi
          </ThemedText>
          
          <View style={styles.detailItem}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Program Studi:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {myProfile.major}
            </ThemedText>
          </View>

          <View style={styles.detailItem}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Universitas:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {myProfile.university}
            </ThemedText>
          </View>

          <View style={styles.detailItem}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Email:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {myProfile.email}
            </ThemedText>
          </View>

          <View style={styles.detailItem}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              No. Telepon:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {myProfile.phone}
            </ThemedText>
          </View>
        </ThemedView>

        {/* Friends Section */}
        <ThemedView style={styles.friendsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Daftar Teman-Teman ({friendsData.length})
          </ThemedText>

          {friendsData.map((friend) => (
            <View key={friend.id} style={styles.friendCard}>
              <View style={styles.friendImageContainer}>
                <Image
                  source={{
                    uri: `https://via.placeholder.com/80/${Math.floor(Math.random() * 16777215).toString(16)}/FFFFFF?text=${friend.name.substring(0, 2)}`,
                  }}
                  style={styles.friendImage}
                  contentFit="cover"
                />
              </View>
              
              <View style={styles.friendInfo}>
                <ThemedText type="defaultSemiBold" style={styles.friendName}>
                  {friend.name}
                </ThemedText>
                <ThemedText type="default" style={styles.friendDetail}>
                  NIM: {friend.nim}
                </ThemedText>
                <ThemedText type="default" style={styles.friendRole}>
                  {friend.role}
                </ThemedText>
                <ThemedText type="default" style={styles.friendPhone}>
                  {friend.phone}
                </ThemedText>
              </View>
            </View>
          ))}
        </ThemedView>

        {/* Footer spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  imageContainer: {
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  nim: {
    fontSize: 14,
    opacity: 0.6,
  },
  detailsSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  detailItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    opacity: 0.8,
  },
  friendsSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  friendCard: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingRight: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  friendImageContainer: {
    marginRight: 12,
  },
  friendImage: {
    width: 80,
    height: 80,
  },
  friendInfo: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  friendName: {
    fontSize: 16,
    marginBottom: 4,
  },
  friendDetail: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 2,
  },
  friendRole: {
    fontSize: 13,
    fontWeight: '500',
    opacity: 0.7,
    marginBottom: 4,
  },
  friendPhone: {
    fontSize: 12,
    opacity: 0.5,
  },
  footer: {
    height: 30,
  },
});
