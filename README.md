## PVGCOE & SSD - EPIC FAILURE 

Jayesh Pandey - Machine Learning Engineer
Prathmesh Thorat - Web Developer
Nikhil Shinde - Backend Devloper

Video Link: https://drive.google.com/file/d/17Ieo5B6_uSCu5WWPlZHhUQKJZZQeBO7G/view?usp=drive_link

---

# Quantum Detective: Cracking Financial Anomalies

## Problem Statement
This project addresses the **"Banking & Financial Use Cases using Gen AI & Quantum Computing"** theme. The specific problem statement is titled **"Quantum Detective: Cracking Financial Anomalies"**, where the goal is to develop a solution using quantum algorithms to detect anomalies in financial datasets such as stock market data, credit card transactions, and loan data. The quantum-based approach offers improvements over classical methods by detecting unusual patterns more efficiently in large datasets.

---

## Instructions on Running the Project

### Prerequisites
Ensure the following dependencies are installed before proceeding:
- **Python 3.13.0** or higher
- **Node.js** and **npm** (for frontend)
- **React.js** (for connecting frontend)
- **Virtual Environment (optional)**: Use `venv` to isolate dependencies
- **Jupyter Notebook**
- **CMake 3.30.5** (if building from source)
- **Composer** (optional, for managing backend dependencies if applicable)

### Required Python Libraries:
Install the following packages:
```bash
pip install numpy pandas scikit-learn matplotlib seaborn qiskit Flask
```

### Steps to Get the Project Running

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/quantum-detective-financial-anomalies.git
   cd quantum-detective-financial-anomalies
   ```

2. **Backend Setup (Python)**
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Flask server:
     ```bash
     python app.py
     ```

3. **Frontend Setup (React.js)**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Running the Jupyter Notebooks**
   - Open the `notebooks` directory and run the `train_credit_card_anomaly_detection.ipynb`, `train_stock_market_anomaly_detection.ipynb`, and `train_loan_anomaly_detection.ipynb` notebooks to train the models:
     ```bash
     jupyter notebook
     ```

5. **Model Files (Optional)**
   - Pre-trained model `.pkl` files for the stock market, credit card, and loan datasets are located in the `models` directory. You can use these models to skip the training process:
     - `models/credit_card_model.pkl`
     - `models/stock_market_model.pkl`

6. **Quantum Component Setup**
   - For running quantum algorithms, ensure you have `Qiskit` installed and integrated. To test the quantum component:
     ```bash
     python quantum_anomaly_detection.py
     ```

7. **View the Web Application**
   - The web application should now be accessible at `http://localhost:3000` for the frontend.

---

## Additional Information

- **Quantum Algorithms Used**: Quantum Support Vector Machines (QSVM) and Quantum k-Means clustering were used to detect financial anomalies by analyzing large datasets with quantum efficiency.
- **Machine Learning Models**: Random Forest algorithm is used for classical baseline comparison.
- **Technologies**: This project leverages Flask for the backend, React.js for the frontend, Qiskit for quantum computing, and Jupyter Notebooks for data exploration and training.

### Integration of Quantum Algorithms
- Quantum anomaly detection is executed via custom Qiskit scripts found in the `quantum_scripts` folder. These scripts are responsible for processing financial datasets to detect anomalies.

---

## References
1. IBM Quantum Experience Documentation: https://quantum-computing.ibm.com/docs
2. Qiskit: https://qiskit.org/
3. Scikit-learn Documentation: https://scikit-learn.org/stable/documentation.html
4. Flask Documentation: https://flask.palletsprojects.com/
5. React.js Documentation: https://reactjs.org/

---

