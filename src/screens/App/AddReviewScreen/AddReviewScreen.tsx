import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  Alert 
} from 'react-native';
import { Star } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { UserReview } from '../../../utils/ApiCall';


interface AddReviewScreenProps {
  navigation: any;
}

const AddReviewScreen: React.FC<AddReviewScreenProps> = ({ navigation,route }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userData = useSelector((state: RootState) => state.user.user.user);
  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);
  console.log(userId);
  console.log(userData);
  console.log(userToken);
 const { JobId } = route.params; // Retrieve the jobId
  console.log('Received Job ID:', JobId); // Log the jobId to confirm

 
  const handleStarPress = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmitReview = async () => {
    if (rating === 0 || !comment) {
      Alert.alert('Error', 'Please provide both a rating and a comment.');
      return;
    }
  
    // Wrap data in "data" key
    const reviewData = {
      data: {
        reviewBy:userData?.name,
        starNumber: rating,
        reviewDescription: comment,
       
        job_order:JobId
      },
    };
  
    try {
      console.log('Submitting Review Data:', JSON.stringify(reviewData));
  
      // Pass updated reviewData to UserReview
      const response = await UserReview(reviewData, userToken);
      console.log('Review Submitted:', response.data);
  
      Alert.alert('Success', 'Review submitted successfully!');
      setRating(0);
      setComment('');
      navigation.navigate('Home');
    } catch (error) {
      if (error.response) {
        console.error('Error Details:', error.response.data.error.details.errors);
      
        
        Alert.alert('Error', `Failed to submit review: ${error.response.data.error.message || 'Unknown error'}`);
      } else if (error.request) {
        console.error('Error Request:', error.request);
        Alert.alert('Error', 'No response from the server. Please try again.');
      } else {
        console.error('Error Message:', error.message);
        Alert.alert('Error', `Something went wrong: ${error.message}`);
      }
      console.error('Full Error:', error);
    }
  };
  
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <TouchableOpacity 
        key={star} 
        onPress={() => handleStarPress(star)}
        style={styles.starContainer}
      >
        <Star 
          color={star <= rating ? '#FFD700' : '#E0E0E0'}
          size={30}
          fill={star <= rating ? '#FFD700' : 'transparent'}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Add Your Review</Text>
          
          {/* Star Rating Section */}
          <View style={styles.starRatingContainer}>
            <Text style={styles.ratingLabel}>Your Rating</Text>
            <View style={styles.starsWrapper}>
              {renderStars()}
            </View>
          </View>

          {/* Comment Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Review Comments</Text>
            <TextInput
              multiline
              placeholder="Share your experience..."
              placeholderTextColor="#888"
              value={comment}
              onChangeText={setComment}
              style={styles.textInput}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={[
              styles.submitButton, 
              { 
                backgroundColor: rating > 0 ? '#4CAF50' : '#CCCCCC',
                opacity: rating > 0 ? 1 : 0.5
              }
            ]}
            onPress={handleSubmitReview}
            disabled={rating === 0 || !comment}
          >
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20
  },
  starRatingContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  ratingLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  starsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  starContainer: {
    marginHorizontal: 5
  },
  inputContainer: {
    marginBottom: 20
  },
  inputLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  textInput: {
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 15,
    textAlignVertical: 'top',
    fontSize: 16
  },
  submitButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default AddReviewScreen;
