import numpy as np
import pandas as pd

def csv_to_npz(csv_file_path, npz_file_path):
    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_file_path)
    
    # Convert the DataFrame to a NumPy array
    data = df.to_numpy()
    
    # Save the NumPy array to a .npz file
    np.savez(npz_file_path, data=data)

# Example usage
csv_file_path = 'C:/Users/piyus/Downloads/Quantum-anomaly-detection-main/Dataset/creditcard.csv'
npz_file_path = 'C:/Users/piyus/Downloads/Quantum-anomaly-detection-main/Dataset/creditcard.npz'
csv_to_npz(csv_file_path, npz_file_path)